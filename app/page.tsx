"use client";

import React, { useMemo, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Heart, PartyPopper, Trophy, Music } from "lucide-react";

// --- BANCO DE DADOS DE ÁUDIOS ---
const AUDIOS_DATA = [
  "/audios/Hino 01 CRISTO MEU MESTRE.mp3",
  "/audios/Hino 05 - A Rocha celestial.mp3",
  "/audios/Hino 100 Todos juntos_ jubilemos.mp3",
  "/audios/Hino 102 - Sinto a voz divina do meu fiel Pastor.mp3",
  "/audios/Hino 106 da CCB - Em nome do nosso Redentor.mp3",
  "/audios/Hino 121 - O meu socorro vem do Senhor.mp3",
  "/audios/Hino 125 Mais Grato a Ti.mp3",
  "/audios/Hino 139 Ó Senhor_ tu me conheces.mp3",
  "/audios/Hino 142 CCB - Ó Pai celestial.mp3",
  "/audios/Hino 15 - Ó Alma Que Choras.mp3",
  "/audios/Hino 157 da CCB_ Ouve a voz que te convida.mp3",
  "/audios/Hino 160 - Sou o Caminho_ a verdade e a vida.mp3",
  "/audios/Hino 169 da CCB_ Aos Pés de Deus Estamos.mp3",
  "/audios/Hino 177 - Eu necessito achegar-me.mp3",
  "/audios/Hino 182 da CCB - Brevemente retornará Jesus .mp3",
  "/audios/Hino 184 - Nos te louvamos por fé Grande Deus.mp3",
  "/audios/Hino 188 O Mestre Habita em Mim.mp3",
  "/audios/Hino 194 Vos chorareis e vos lamentareis.mp3",
  "/audios/Hino 199 - Senhor_ Tu És a minha Porção.mp3",
  "/audios/Hino 2 - De Deus tu és Eleita.mp3",
  "/audios/Hino 208 - Conserva a paz_ ó minha alma.mp3",
  "/audios/Hino 210 - Grandes Promessas .mp3",
  "/audios/Hino 214 CCB - Como foi para os céus_ assim virá.mp3",
  "/audios/Hino 217 CCB - Vamos_ unidos_ a Deus louvar.mp3",
  "/audios/Hino 218 - Oh_ Jubilemos_ devotos de Cristo.mp3",
  "/audios/Hino 220 CCB - Cristo voltará _ Allan Oliveira.mp3",
  "/audios/Hino 222 - Brevemente vira o Senhor Jesus.mp3",
  "/audios/Hino 23 - O Senhor é o meu Pastor.mp3",
  "/audios/Hino 231 Provemos irmãos_ do amor do Senhor.mp3",
  "/audios/Hino 235 - Um amor Imenso .mp3",
  "/audios/Hino 236 da CCB.mp3",
  "/audios/Hino 237 da CCB_ Deus é Por Mim.mp3",
  "/audios/Hino 238 da CCB_ Teu Servo ouve fala Senhor.mp3",
  "/audios/Hino 239 da CCB_ Eis Que a Noite é Passada.mp3",
  "/audios/Hino 24 - Dá-me Graça Senhor .mp3",
  "/audios/Hino 247 Se fores tentado.mp3",
  "/audios/Hino 248 - Gloria Aleluia.mp3",
  "/audios/Hino 254 CCB - De Jesus a Graça Divina .mp3",
  "/audios/Hino 255 CCB - Jesus é a nossa Rocha.mp3",
  "/audios/Hino 256 CCB_ Sem Deus Pai_ vivi no mundo.mp3",
  "/audios/Hino 260 - Sou Servo Inútil.mp3",
  "/audios/Hino 261 CCB_ Vivo por Cristo.mp3",
  "/audios/Hino 264 CCB - Redentor Celeste e Santo .mp3",
  "/audios/Hino 268 CCB - Ó Deus Bendito.mp3",
  "/audios/Hino 27 - O Senhor é minha Luz.mp3",
  "/audios/Hino 270 CCB - Deste Mundo Mais Nada Esperarei.mp3",
  "/audios/Hino 272 CCB - Louvarei Ao Bom Jesus .mp3",
  "/audios/Hino 282 CCB_ Constantemente oremos a Deus.mp3",
  "/audios/Hino 283 - Quero ó Senhor _ ir contigo.mp3",
  "/audios/Hino 285 CCB_ Glória e louvor a Jesus darei.mp3",
  "/audios/Hino 287 CCB - Irmãos amados_ sempre avante.mp3",
  "/audios/Hino 288 CCB - Ó irmãos_ com Cristo avante.mp3",
  "/audios/Hino 291 CCB - Irmãos_ avante_ avante.mp3",
  "/audios/Hino 297 - CCB - Senhor_ Conforta meu Coração.mp3",
  "/audios/Hino 301 - CCB - Nossa Esperança é Jesus.mp3",
  "/audios/Hino 314 - CCB - O Teu poder Supremo.mp3",
  "/audios/Hino 321 da CCB - Bendito seja o Deus vivente .mp3",
  "/audios/Hino 33 da CCB - Jesus é o nosso Guia.mp3",
  "/audios/Hino 335 - Eu almejo nessa pátria entrar.mp3",
  "/audios/Hino 34 - O Mestre que desceu dos céus.mp3",
  "/audios/Hino 351 - Senhor a Tua Presença.mp3",
  "/audios/Hino 364 - Os tempos já chegados são.mp3",
  "/audios/Hino 375 - A paz Eu vos deixo.mp3",
  "/audios/Hino 38 Ó Senhor és minha Vida.mp3",
  "/audios/Hino 384 - Nos Resgatou e nos Lavou.mp3",
  "/audios/Hino 39 - Eu desejo_ Senhor.mp3",
  "/audios/Hino 395 - Eis me aqui_ dira o criador.mp3",
  "/audios/Hino 397 -  Paz_ sublime paz.mp3",
  "/audios/Hino 399 - Sou a Videira.mp3",
  "/audios/Hino 40 - Quanto em mim Tu operaste.mp3",
  "/audios/Hino 416 da CCB_ No calvário da Dor.mp3",
  "/audios/Hino 45 - Oh_ Quanto nos amaste.mp3",
  "/audios/Hino 454 - Cidadão Dos Céus.mp3",
  "/audios/Hino 455 - Quão ditoso é caminhar com Jesus.mp3",
  "/audios/Hino 457 da CCB - Comigo está Jesus.mp3",
  "/audios/Hino 46 - Grandioso é o nosso Deus.mp3",
  "/audios/Hino 47 - Sublime é o perdão.mp3",
  "/audios/Hino 49 - Venho adorar-Te_ santo Criador.mp3",
  "/audios/Hino 50 - Glória a Jesus_ Aleluia.mp3",
  "/audios/Hino 52 CCB Luz Eternal é Jesus.mp3",
  "/audios/Hino 55 - Paz seja em vós.mp3",
  "/audios/Hino 58 - Sou crente em Jesus.mp3",
  "/audios/Hino 63 - Se vós baterdes_ Ele vos abre.mp3",
  "/audios/Hino 70 Senhor_ tu és a minha esperança.mp3",
  "/audios/Hino 76 - Cristo Jesus sua mão me dá.mp3",
  "/audios/Hino 79 da CCB - Bom é estarmos nós aqui.mp3",
  "/audios/Hino 89 Oh Grande Deus.mp3"
  ];

const NIVEIS = [
  { valor: 2, nome: "VISITANTE", img: "/images/visitante.png" },
  { valor: 6, nome: "ALMA SEDENTA", img: "/images/almasedenta.png" },
  { valor: 10, nome: "TESTEMUNHADO", img: "/images/testemunhado.png" },
  { valor: 20, nome: "NOVO BATIZADO", img: "/images/novobatizado.png" },
  { valor: 30, nome: "VELHO NA GRAÇA", img: "/images/velhonagraca.png" },
  { valor: 40, nome: "NASCIDO NA GRAÇA", img: "/images/nascidonagraca.png" },
  { valor: 50, nome: "ANCIÃO", img: "/images/anciao.png" },
];

export default function AcerteOHinoApp() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [erros, setErros] = useState(0);
  const [bloquearCliques, setBloquearCliques] = useState(false);
  const [subiuDeNivel, setSubiuDeNivel] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const efeitoRef = useRef<HTMLAudioElement | null>(null);

  const extrairNome = (path: string) => 
    path.split("/").pop()?.replace(".mp3", "").replace(/_/g, " ").replace(/-/g, "").trim() || "";

  const quizData = useMemo(() => {
    return AUDIOS_DATA.map((path) => {
      const correta = extrairNome(path);
      const outrasOpcoes = AUDIOS_DATA
        .filter(p => p !== path)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(p => extrairNome(p));

      return {
        audio: path,
        resposta: correta,
        opcoes: [correta, ...outrasOpcoes].sort(() => Math.random() - 0.5)
      };
    }).sort(() => Math.random() - 0.5);
  }, []);

  const perguntaAtual = quizData[index % quizData.length];

  const nivelAtualInfo = useMemo(() => {
    return [...NIVEIS].reverse().find(n => pontos >= n.valor) || { nome: "INICIANTE", img: "/images/visitante.png" };
  }, [pontos]);

  const responder = (opcao: string) => {
    if (bloquearCliques) return;
    setBloquearCliques(true);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (opcao === perguntaAtual.resposta) {
      if (efeitoRef.current) { efeitoRef.current.src = "/audios/acerto.mp3"; efeitoRef.current.play(); }
      const novosPontos = pontos + 1;
      setPontos(novosPontos);

      if (NIVEIS.some(n => n.valor === novosPontos)) {
        setTimeout(() => setSubiuDeNivel(true), 1000);
      } else {
        setTimeout(() => { setIndex(i => i + 1); setBloquearCliques(false); }, 1500);
      }
    } else {
      if (efeitoRef.current) { efeitoRef.current.src = "/audios/erro.mp3"; efeitoRef.current.play(); }
      const novosErros = erros + 1;
      setErros(novosErros);
      if (novosErros >= 3) {
        setTimeout(() => setGameOver(true), 800);
      } else {
        setTimeout(() => { setIndex(i => i + 1); setBloquearCliques(false); }, 1500);
      }
    }
  };

  // --- COMPONENTE DE BACKGROUND PERSONALIZADO ---
  const MainBackground = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* 
          Abaixo, aponte para o caminho da sua imagem de background. 
          Ex: /images/meu-fundo.jpg 
      */}
      <div 
        className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat opacity-40 scale-105" 
        style={{ filter: 'blur(4px)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
    </div>
  );

  if (gameOver) return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <MainBackground />
      <Card className="w-full max-w-md bg-zinc-950/90 border-red-900 border-2 text-white text-center backdrop-blur-md">
        <CardContent className="p-8 space-y-6">
          <img src="/images/gameover.png" alt="Game Over" className="w-full rounded-lg shadow-2xl border border-red-900/50" />
          <h1 className="text-3xl font-black text-red-600 italic uppercase">Fim de Linha</h1>
          <Button onClick={() => window.location.reload()} className="w-full h-14 bg-red-900 hover:bg-red-800 text-white font-bold uppercase">Tentar Novamente</Button>
        </CardContent>
      </Card>
    </div>
  );

  if (subiuDeNivel) {
    const nivelConquistado = NIVEIS.find(n => n.valor === pontos);
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative">
        <MainBackground />
        <Card className="w-full max-w-md bg-zinc-900/90 border-yellow-500 border-2 text-white text-center animate-in zoom-in duration-300 backdrop-blur-md">
          <CardContent className="p-8 space-y-6">
            <PartyPopper className="w-12 h-12 mx-auto text-yellow-500" />
            <h1 className="text-2xl font-black uppercase">Novo Nível!</h1>
            <img src={nivelConquistado?.img} className="w-48 h-48 mx-auto rounded-xl object-cover border-4 border-yellow-500/20 shadow-2xl" />
            <h2 className="text-3xl font-bold text-yellow-500">{nivelConquistado?.nome}</h2>
            <Button onClick={() => { setSubiuDeNivel(false); setIndex(i => i + 1); setBloquearCliques(false); }} className="w-full h-16 bg-yellow-600 hover:bg-yellow-500 text-white text-xl font-bold">CONTINUAR</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <MainBackground />
      <audio ref={audioRef} />
      <audio ref={efeitoRef} />
      
      <Card className="w-full max-w-md bg-zinc-900/70 border-white/10 text-white shadow-2xl overflow-hidden backdrop-blur-lg">
        <div className="h-1.5 bg-white/10">
          <div className="h-full bg-yellow-500 transition-all duration-700 shadow-[0_0_15px_rgba(234,179,8,0.6)]" style={{ width: `${(pontos / 50) * 100}%` }} />
        </div>

        <CardContent className="p-6 space-y-8">
          <header className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-yellow-500 rounded-full blur opacity-30" />
                <img src={nivelAtualInfo.img} className="relative w-12 h-12 rounded-full border-2 border-yellow-500 object-cover shadow-lg" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tighter">Nível Atual</p>
                <span className="text-sm font-black text-yellow-500">{nivelAtualInfo.nome}</span>
              </div>
            </div>
            <div className="flex gap-1.5">
              {[...Array(3)].map((_, i) => (
                <Heart key={i} className={`w-6 h-6 transition-all ${i < 3 - erros ? "text-red-500 fill-red-500 shadow-sm" : "text-white/10 fill-transparent"}`} />
              ))}
            </div>
          </header>

          {!started ? (
            <div className="text-center py-10 space-y-8">
              <div className="flex justify-center relative">
                <div className="absolute inset-0 bg-yellow-500 blur-3xl opacity-20" />
                <Music className="relative w-20 h-20 text-yellow-500 animate-pulse" />
              </div>
              <h1 className="text-5xl font-black italic tracking-tighter text-white drop-shadow-2xl">QUIZ HINOS</h1>
              <Button onClick={() => setStarted(true)} className="w-full h-20 text-2xl font-black bg-yellow-500 text-black hover:bg-yellow-400 border-none transition-transform active:scale-95 shadow-xl">JOGAR</Button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex justify-center">
                <Button 
                  onClick={() => { if (audioRef.current) { audioRef.current.src = perguntaAtual.audio; audioRef.current.play(); } }}
                  className="w-24 h-24 rounded-full bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all active:scale-90"
                >
                  <Play className="w-10 h-10 fill-current ml-1" />
                </Button>
              </div>

              <div className="grid gap-3">
                {perguntaAtual.opcoes.map((opcao) => (
                  <Button
                    key={opcao}
                    variant="outline"
                    disabled={bloquearCliques}
                    onClick={() => responder(opcao)}
                    className="h-auto py-5 px-6 border-white/5 bg-white/5 hover:bg-white/10 text-zinc-100 font-bold text-base transition-colors backdrop-blur-sm"
                  >
                    {opcao}
                  </Button>
                ))}
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Score: {pontos}/50</span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Erros: {erros}/3</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}