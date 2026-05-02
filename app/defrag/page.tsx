'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Activity, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function DefragEngine() {
  const supabase = createClient();
  const [session, setSession] = useState<any>(null);
  const [draft, setDraft] = useState("");
  const [connections, setConnections] = useState<any[]>([]);
  const [selectedFriend, setSelectedFriend] = useState("0x9A4_DEFAULT");
  const [insight, setInsight] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchConnections(session.user.id);
    });
  }, []);

  const fetchConnections = async (uid: string) => {
    const { data } = await supabase
      .from('connections')
      .select('friend_profile_id')
      .eq('user_id', uid);
    if (data && data.length > 0) {
      setConnections(data);
      setSelectedFriend(data[0].friend_profile_id);
    }
  };

  const runOptimization = async () => {
    // If no session in dev mode, we'll simulate the load for UI testing
    setLoading(true);
    
    if (!session?.access_token) {
      setTimeout(() => {
        setInsight({
          status: "MEANING_SPLIT_DETECTED",
          user_intent: "INTEGRITY_PRESERVATION",
          target_reaction: "THREAT_DETECTED",
          bridge_action: "Acknowledge safety before establishing boundary.",
          raw_data: "Simulation mode active. Awaiting verified Supabase JWT."
        });
        setLoading(false);
      }, 1500);
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/relational-synthesis`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`
        },
        body: JSON.stringify({
          senderPid: `${session.user.id}-primary`,
          receiverPid: selectedFriend,
          draftText: draft
        })
      });
      const result = await response.json();
      setInsight(result);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* ── SYSTEM HEADER ── */}
      <header className="px-6 h-16 flex items-center justify-between border-b border-zinc-900 bg-black shrink-0">
        <Link className="flex items-center gap-3" href="/">
          <div className="w-4 h-4 bg-cyan-400 rounded-none animate-pulse"></div>
          <span className="font-mono text-sm tracking-widest uppercase text-cyan-400">DEFRAG_ENGINE</span>
        </Link>
        <div className="font-mono text-[10px] text-zinc-500 flex gap-6">
          <span>UID: {session?.user?.id?.substring(0, 8) || "UNVERIFIED"}</span>
          <span>ENV: PRODUCTION</span>
        </div>
      </header>

      {/* ── TELEMETRY DASHBOARD ── */}
      <main className="flex-1 p-6 grid lg:grid-cols-2 gap-6 h-[calc(100vh-4rem)]">
        
        {/* PANEL 1: INPUT */}
        <div className="border border-zinc-900 flex flex-col h-full hover:border-zinc-700 transition-colors">
          <div className="p-4 border-b border-zinc-900 flex justify-between items-center bg-zinc-950">
            <span className="font-mono text-[10px] text-zinc-500 tracking-widest">01_INPUT_STREAM</span>
            <Activity className="w-3 h-3 text-zinc-600" />
          </div>
          
          <div className="p-6 flex-1 flex flex-col gap-6">
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block">
                SYNC_TARGET
              </label>
              <select 
                value={selectedFriend}
                onChange={(e) => setSelectedFriend(e.target.value)}
                className="w-full bg-black border border-zinc-800 text-white font-mono text-xs p-3 focus:border-cyan-400 focus:outline-none appearance-none rounded-none"
              >
                <option value="0x9A4_DEFAULT">TARGET: UNASSIGNED_NODE</option>
                {connections.map(c => (
                  <option key={c.friend_profile_id} value={c.friend_profile_id}>
                    TARGET: {c.friend_profile_id.substring(0, 12)}...
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1 flex flex-col space-y-2">
              <label className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block">
                TENSION_LOG
              </label>
              <textarea 
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="> INITIALIZE TENSION LOG..."
                className="flex-1 w-full bg-black border border-zinc-800 text-white font-mono text-sm p-4 focus:border-cyan-400 focus:outline-none resize-none rounded-none placeholder:text-zinc-700"
              />
            </div>

            <button 
              onClick={runOptimization}
              disabled={loading || !draft.trim()}
              className="w-full border border-white bg-transparent text-white py-4 font-mono text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-white"
            >
              {loading ? "[ PROCESSING ALIGNMENT... ]" : "[ EXECUTE RELATIONAL SYNTHESIS ]"}
            </button>
          </div>
        </div>

        {/* PANEL 2: OUTPUT / TERMINAL */}
        <div className="border border-zinc-900 flex flex-col h-full hover:border-zinc-700 transition-colors relative overflow-hidden">
          <div className="p-4 border-b border-zinc-900 flex justify-between items-center bg-zinc-950">
            <span className="font-mono text-[10px] text-zinc-500 tracking-widest">02_SYSTEM_OUTPUT</span>
            <Terminal className="w-3 h-3 text-cyan-400" />
          </div>

          <div className="p-6 flex-1 overflow-y-auto font-mono text-xs bg-[#050505]">
            {!insight && !loading && (
              <div className="text-zinc-700 space-y-2">
                <p>{">"} AWAITING INPUT_STREAM...</p>
                <p>{">"} NO ACTIVE TENSION DETECTED</p>
                <span className="animate-pulse">_</span>
              </div>
            )}

            {loading && (
              <div className="text-cyan-400 space-y-2">
                <p>{">"} ANALYZING INPUT VARIABLES...</p>
                <p>{">"} CROSS-REFERENCING BASELINE COORDINATES...</p>
                <p>{">"} CALCULATING MEANING SPLIT...</p>
                <span className="animate-pulse">_</span>
              </div>
            )}

            {insight && !loading && (
              <div className="text-cyan-400 space-y-6 animate-in fade-in duration-500">
                <div className="space-y-1">
                  <p className="text-white">{"{"}</p>
                  <div className="pl-4 space-y-2">
                    <p><span className="text-zinc-500">"status":</span> <span className="text-cyan-300">"{insight.status || 'ALIGNMENT_PROCESSED'}"</span>,</p>
                    {insight.user_intent && (
                      <p><span className="text-zinc-500">"user_intent":</span> <span className="text-white">"{insight.user_intent}"</span>,</p>
                    )}
                    {insight.target_reaction && (
                      <p><span className="text-zinc-500">"target_reaction":</span> <span className="text-red-400">"{insight.target_reaction}"</span>,</p>
                    )}
                    <p className="pt-2"><span className="text-zinc-500">"bridge_action":</span></p>
                    <p className="text-white bg-cyan-950/30 p-3 border border-cyan-900/50 leading-relaxed">
                      {insight.bridge_action || insight.data || insight.raw_data}
                    </p>
                  </div>
                  <p className="text-white">{"}"}</p>
                </div>
                <div><span className="animate-pulse">_</span></div>
              </div>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}
