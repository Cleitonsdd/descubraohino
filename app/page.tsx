"use client";

import React, { useMemo, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function AcerteOHinoApp() {
  function embaralhar(arr: string[]) {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  // MANTENHA AQUI SUA LISTA COMPLETA DE AUDIOS
  const audios = [
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
  "/audios/Hino 236 Há um lugar de eterna Paz.mp3",
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

  const perguntas = useMemo(
    () =>
      Array.from({ length: audios.length }, (_, i) => ({
        id: i + 1,
        resposta:
          audios[i]
            ?.split("/")
            .pop()
            ?.replace(".mp3", "")
            ?.replace(/_/g, " ") || `Hino ${i + 1}`,
        audio: audios[i],
        opcoes: embaralhar([
          audios[i]?.split("/").pop()?.replace(".mp3", "") || "Hino",
          audios[(i + 1) % audios.length]
            ?.split("/")
            .pop()
            ?.replace(".mp3", "") || "Hino",
          audios[(i + 2) % audios.length]
            ?.split("/")
            .pop()
            ?.replace(".mp3", "") || "Hino",
          audios[(i + 3) % audios.length]
            ?.split("/")
            .pop()
            ?.replace(".mp3", "") || "Hino",
        ]),
      })),
    []
  );

  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(
    () => Math.floor(Math.random() * Math.max(audios.length, 1))
  );
  const [pontos, setPontos] = useState(0);
  const [msg, setMsg] = useState("");
  const [efeito, setEfeito] = useState<"acerto" | "erro" | "">("");
  const [erros, setErros] = useState(0);

  const [mostrarNivel, setMostrarNivel] = useState(false);
  const [gameOverFinal, setGameOverFinal] = useState(false);
  const [nivelFinal, setNivelFinal] = useState("");

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const somAcertoRef = useRef<HTMLAudioElement | null>(null);
  const somErroRef = useRef<HTMLAudioElement | null>(null);

  const atual = perguntas[index];
  const progresso = ((index + 1) / Math.max(perguntas.length, 1)) * 100;
  const limiteErros = 3;

  function getNivel(acertos: number) {
    if (acertos === 1) return "VISITANTE";
    if (acertos >= 2 && acertos <= 4) return "ALMA SEDENTA";
    if (acertos >= 5 && acertos <= 15) return "TESTEMUNHADO";
    if (acertos >= 16 && acertos <= 30) return "NOVO BATIZADO";
    if (acertos >= 31 && acertos <= 40) return "VELHO NA GRAÇA";
    if (acertos >= 41 && acertos <= 50) return "NASCIDO NA GRAÇA";
    if (acertos > 50) return "ANCIÃO";
    return "VISITANTE";
  }

  function getImagemNivel(nivel: string) {
    switch (nivel) {
      case "VISITANTE":
        return "/images/visitante.png";
      case "ALMA SEDENTA":
        return "/images/alma-sedenta.png";
      case "TESTEMUNHADO":
        return "/images/testemunhado.png";
      case "NOVO BATIZADO":
        return "/images/novo-batizado.png";
      case "VELHO NA GRAÇA":
        return "/images/velho-na-graca.png";
      case "NASCIDO NA GRAÇA":
        return "/images/nascido-na-graca.png";
      case "ANCIÃO":
        return "/images/anciao.png";
      default:
        return "/images/visitante.png";
    }
  }

  function tocar() {
    const audio = audioRef.current;
    if (!audio || !atual?.audio) return;

    audio.pause();
    audio.currentTime = 0;
    audio.src = atual.audio;
    audio.load();
    audio.play().catch(() => {
      setMsg("Erro ao reproduzir o áudio");
    });
  }

  function irParaTelaNivel() {
  // garante que a tela de game over não abra antes
  setGameOverFinal(false);
  const nivel = getNivel(pontos);
  setNivelFinal(nivel);
  setMostrarNivel(true);
  setTempoNivel(100);

  let progresso = 100;

  const intervalo = setInterval(() => {
    progresso -= 10;
    setTempoNivel(progresso);

    if (progresso <= 0) {
      clearInterval(intervalo);
      setMostrarNivel(false);
      setGameOverFinal(true);
    }
  }, 1000);
}

  function continuarParaGameOver() {
  setMostrarNivel(false);
  setGameOverFinal(true);
}

// contador visual de 10 segundos
const [tempoNivel, setTempoNivel] = useState(100);


  function reiniciar() {
    setStarted(false);
    setIndex(Math.floor(Math.random() * Math.max(audios.length, 1)));
    setPontos(0);
    setErros(0);
    setMsg("");
    setEfeito("");
    setMostrarNivel(false);
    setGameOverFinal(false);
    setNivelFinal("");
  }

  function responder(opcao: string) {
    if (!atual) return;

    audioRef.current?.pause();
    if (audioRef.current) audioRef.current.currentTime = 0;

    const limparTexto = (texto: string) => texto.toLowerCase().trim().replace(/_/g, " ").replace(/\\s+/g, " ");

    const acertou = limparTexto(opcao) === limparTexto(atual.resposta);

    if (acertou) {
      setPontos((v) => v + 1);
      setEfeito("acerto");
      somAcertoRef.current?.play();
      setMsg("✅ Acertou!");
    } else {
      setEfeito("erro");
      somErroRef.current?.play();
      setMsg(`❌ Errou! Resposta correta: ${atual.resposta}`);

      setErros((v) => {
        const total = v + 1;
        if (total >= limiteErros) {
          setTimeout(() => {
            // primeiro mostra a tela de nível
            irParaTelaNivel();
          }, 1500);
        }
        return total;
      });
    }

    setTimeout(() => {
      if (!acertou && erros + 1 >= limiteErros) return;

      setMsg("");
      setEfeito("");

      if (index < perguntas.length - 1) {
        setIndex((v) => v + 1);
      } else {
        // terminou todas as perguntas → mostrar nível primeiro
        irParaTelaNivel();
      }
    }, 2500);
  }

  const fundo =
    'min-h-screen bg-[url("/images/background.jpg")] bg-cover bg-center bg-no-repeat flex items-center justify-center p-4';

  if (mostrarNivel) {
    return (
      <div className={fundo}>
        <Card className="w-full max-w-md bg-white/90">
          <CardContent className="p-6 text-center space-y-4">
            <img src={getImagemNivel(nivelFinal)} alt={nivelFinal} className="w-72 mx-auto rounded-2xl" />
            <h1 className="text-3xl font-bold">Seu Nível</h1>
            <p className="text-xl font-semibold">{nivelFinal}</p>
            <div className="space-y-2">
              <p className="text-sm font-medium">Próxima tela em alguns segundos...</p>
              <Progress value={tempoNivel} />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // quando atingir 3 erros também mostrar primeiro a tela de nível
// troque setGameOverFinal(true) por irParaTelaNivel()

if (gameOverFinal) {
    return (
      <div className={fundo}>
        <Card className="w-full max-w-md bg-white/90">
          <CardContent className="p-6 text-center space-y-4">
            <img src="/images/game-over.png" alt="Game Over" className="w-80 mx-auto rounded-2xl" />
            <h1 className="text-3xl font-bold">GAME OVER</h1>
            <p>Você acertou {pontos} hinos</p>
            <Button className="w-full" onClick={reiniciar}>
              Jogar Novamente
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={fundo}>
      <audio ref={audioRef} preload="auto" />
      <audio ref={somAcertoRef} src="/sons/acerto.mp3" preload="auto" />
      <audio ref={somErroRef} src="/sons/erro.mp3" preload="auto" />

      <Card className="w-full max-w-md bg-white/90">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-3xl font-bold text-center">🎶 Acerte o Hino 🎶</h1>

          {!started ? (
            <Button className="w-full" onClick={() => setStarted(true)}>
              INICIAR
            </Button>
          ) : (
            <>
              <div className="flex justify-between text-sm">
                <span>{pontos} pts</span>
                <span>{erros}/3 erros</span>
              </div>

              <Progress value={progresso} />

              <Button className="w-full" onClick={tocar}>
                ▶ Ouvir trecho
              </Button>

              <div className="grid gap-2">
                {atual?.opcoes.map((opcao) => (
                  <Button
                    key={opcao}
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => responder(opcao)}
                  >
                    {opcao}
                  </Button>
                ))}
              </div>

              {msg && <p className="text-center text-sm">{msg}</p>}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
