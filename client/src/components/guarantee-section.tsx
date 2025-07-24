import { Shield } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="px-4 py-8 bg-accent-green text-white">
      <div className="max-w-sm mx-auto text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="text-accent-green h-8 w-8" />
        </div>
        <h3 className="font-fredoka text-xl mb-3">
          🛡️ Garantia de 7 Dias
        </h3>
        <p className="text-sm leading-relaxed opacity-90">
          Se por qualquer motivo você não ficar 100% satisfeita com nossos livros de colorir, 
          devolvemos seu dinheiro sem perguntas!
        </p>
      </div>
    </section>
  );
}
