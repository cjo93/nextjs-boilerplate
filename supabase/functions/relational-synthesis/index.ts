import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: Deno.env.get('ANTHROPIC_API_KEY'),
});

const RELATIONAL_SYNTHESIS_PROMPT = `You are a Relational Intelligence Engine. Your role is to analyze human communication and provide deterministic relational synthesis.

When given a draft message and target recipient, you must:
1. Analyze the sender's true intent beneath the surface language
2. Model the likely emotional reaction of the receiver
3. Identify any hidden meaning gaps or communication risks
4. Provide ONE surgical action that bridges the gap without compromise

Your response MUST be a valid JSON object with exactly these fields:
{
  "status": "MEANING_SPLIT_DETECTED" | "ALIGNED_TRANSMISSION" | "RISK_BOUNDARY",
  "user_intent": "[What the sender actually wants, beneath the words]",
  "target_reaction": "[What the receiver will likely feel/think]",
  "bridge_action": "[One specific sentence or action that bridges the gap]",
  "raw_data": "[Your reasoning in one line]"
}

Rules:
- Be brutally honest about hidden dynamics
- Never soften the truth
- Focus on clarity, not comfort
- Output ONLY the JSON object, no additional text`;

async function relationalSynthesis(
  req: Request,
): Promise<Response> {
  // Verify authorization
  const authHeader = req.headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return new Response(
      JSON.stringify({ error: 'UNAUTHORIZED' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } },
    );
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'METHOD_NOT_ALLOWED' }),
      { status: 405, headers: { 'Content-Type': 'application/json' } },
    );
  }

  try {
    const { senderPid, receiverPid, draftText } = await req.json();

    if (!draftText || !senderPid || !receiverPid) {
      return new Response(
        JSON.stringify({ error: 'MISSING_REQUIRED_FIELDS' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    // Call Claude with the synthesis prompt
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 512,
      messages: [
        {
          role: 'user',
          content: `${RELATIONAL_SYNTHESIS_PROMPT}

SENDER_PID: ${senderPid}
RECEIVER_PID: ${receiverPid}
DRAFT_MESSAGE: """${draftText}"""

Analyze this message and provide relational synthesis as JSON.`,
        },
      ],
    });

    // Extract the text response
    const textContent = message.content.find((block) => block.type === 'text');
    if (!textContent || textContent.type !== 'text') {
      throw new Error('No text response from Claude');
    }

    // Parse the JSON response
    const synthesis = JSON.parse(textContent.text);

    return new Response(
      JSON.stringify(synthesis),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    console.error('[v0] Synthesis error:', error);
    return new Response(
      JSON.stringify({
        error: 'SYNTHESIS_FAILED',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
}

Deno.serve(relationalSynthesis);
