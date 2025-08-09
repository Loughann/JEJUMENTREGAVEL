"use client"

import { useState } from "react"
import { Crown, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

export default function Page() {
  const [step, setStep] = useState<1 | 2>(1)
  const { toast } = useToast()

  function goToStep2() {
    setStep(2)
  }

  function handlePremium() {
    toast({
      title: "Premium confirmado!",
      description: "Você será redirecionado para o pagamento do Plano Completo Premium.",
    })
    // Redireciona para o link de pagamento
    window.location.href = "https://pay.cakto.com.br/39itwea"
  }

  function handleBasico() {
    toast({
      title: "Plano básico selecionado",
      description: "Você será redirecionado para o seu plano básico.",
    })
    // Redireciona para o link do Google Drive
    window.location.href = "https://drive.google.com/file/d/1OzZXcIrD_0YeX_RlGgkSzLm1LBDPMpx6/view?usp=drive_link"
  }

  // Em uma aplicação real, você geraria esta data dinamicamente
  const scarcityDate = "09/08/2025"

  return (
    <main className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Imagem de fundo conceitual */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          filter: "brightness(0.9) contrast(1.1)", // Ajustes para melhor visual
        }}
      ></div>
      {/* Overlay para escurecer/suavizar a imagem de fundo com animação */}
      <div className="absolute inset-0 bg-red-50/30 backdrop-blur-sm animate-breathe-overlay"></div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-md items-center justify-center p-4">
        {/* Card principal */}
        <Card className="w-full overflow-hidden rounded-2xl border-red-100 shadow-sm">
          {/* Faixa superior */}
          <div className="relative bg-red-600 px-6 pb-8 pt-7 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
            <div className="relative flex flex-col items-center text-center">
              {step === 1 ? (
                <>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur"></div>
                  <h1 className="text-balance leading-tight font-extrabold text-2xl">{"PARABÉNS PELA INICIATIVA!"}</h1>
                  <p className="mt-1 text-sm text-red-50 font-medium">{"SEU PLANO PERSONALIZADO ESTÁ PRONTO!"}</p>
                </>
              ) : (
                <>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
                    <Crown className="h-4 w-4 text-red-600" aria-hidden="true" />
                  </div>
                  <h1 className="text-balance leading-tight text-2xl font-extrabold">{"PLANO COMPLETO PREMIUM"}</h1>
                  <p className="mt-1 text-sm text-red-50">{"Desbloqueie todos os recursos com pagamento único."}</p>
                </>
              )}
            </div>
          </div>

          {/* Conteúdo */}
          <CardContent key={step} className="space-y-5 p-5 animate-fade-in-slide-up">
            {step === 1 ? (
              <>
                <div className="rounded-xl bg-red-50 p-4 text-center">
                  <p className="text-red-900/90 font-extrabold text-xl">
                    {"Acesse agora seu plano personalizado e comece hoje mesmo sua jornada."}
                  </p>
                </div>

                <Button
                  onClick={goToStep2}
                  className="h-12 w-full rounded-xl bg-red-600 text-base font-semibold hover:bg-red-700 hover:animate-none transition-all duration-300 hover:scale-105"
                  style={{
                    animation: "pulse-scale 1.3s ease-in-out infinite",
                  }}
                >
                  {"ACESSAR PLANO PERSONALIZADO"}
                </Button>
              </>
            ) : (
              <>
                {/* Preço e condição */}
                <div className="rounded-xl bg-red-50 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{"Pagamento único"}</Badge>
                    <span className="text-xs text-red-900/70">{"Oferta limitada"}</span>
                  </div>

                  <div className="flex flex-wrap items-end justify-center gap-x-3">
                    <div className="text-3xl font-bold leading-none text-red-700">{"R$10,00"}</div>
                    <div className="text-sm text-red-900/70">
                      <span className="mr-1 line-through opacity-70">{"R$79,90"}</span>
                      {"por tempo limitado • pagamento único"}
                    </div>
                  </div>

                  <ul className="mt-3 space-y-2 text-sm text-red-900/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-600" aria-hidden="true" />
                      <span>{"Acompanhamento completo do jejum e hidratação"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-600" aria-hidden="true" />
                      <span>{"Planos e metas 100% personalizados ao seu objetivo"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-600" aria-hidden="true" />
                      <span>{"Relatórios e insights avançados de progresso"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-600" aria-hidden="true" />
                      <span>{"Receitas e sugestões de refeições focadas em jejum"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-600" aria-hidden="true" />
                      <span>{"Suporte prioritário e atualizações futuras inclusas"}</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <Button
                    onClick={handlePremium}
                    className="h-12 w-full rounded-xl bg-red-600 text-base font-semibold hover:bg-red-700 hover:animate-none transition-all duration-300 hover:scale-105"
                    style={{
                      animation: "pulse-scale 2s ease-in-out infinite",
                    }}
                  >
                    {"TER PLANO MAIS COMPLETO PREMIUM"}
                  </Button>
                  <Button
                    onClick={handleBasico}
                    variant="ghost"
                    className="h-12 w-full rounded-xl text-sm text-muted-foreground hover:bg-muted"
                  >
                    {"CONTINUAR COM PLANO BÁSICO"}
                  </Button>
                </div>

                <p className="text-center leading-snug text-muted-foreground text-xs font-medium">
                  {"Oportunidade única válida até "}
                  <span className="font-semibold text-red-700">{scarcityDate}</span>
                  {". Sem cobranças recorrentes."}
                </p>
              </>
            )}
          </CardContent>
        </Card>
      </div>
      <style jsx>{`
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes breathe-overlay {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.45; }
        }
        @keyframes fade-in-slide-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-slide-up {
          animation: fade-in-slide-up 0.5s ease-out forwards;
        }
      `}</style>
    </main>
  )
}
