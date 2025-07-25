import { Shield } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="px-4 py-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/90 to-emerald-600/90 backdrop-blur-sm"></div>
      <div className="max-w-sm mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 shadow-xl backdrop-blur-sm border border-white/30">
          <Shield className="text-white h-10 w-10" />
        </div>
        <h3 className="font-heading text-3xl font-bold mb-4">
          Garantia de 7 Dias
        </h3>
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
          
          <p className="text-lg leading-relaxed text-green-50">
            Se por qualquer motivo você não ficar 100% satisfeita com nossos livros de colorir, 
            <strong className="text-white"> devolvemos seu dinheiro sem perguntas!</strong>
          </p>
          <div className="mt-6 bg-white/10 rounded-2xl p-4 border border-white/20">
            <p className="text-green-100 font-semibold">✓ Sem burocracias</p>
            <p className="text-green-100 font-semibold">✓ Reembolso total</p>
            <p className="text-green-100 font-semibold">✓ Compra 100% segura</p>
          </div>
        </div>
      </div>
    </section>
  );
}
