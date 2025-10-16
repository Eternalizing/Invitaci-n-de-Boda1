export function SimpleFooter() {
  return (
    <footer className="bg-gradient-to-br from-vinho to-rosa-escuro text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <h3 className="text-3xl font-bold">
            Pronta para dominar o <span className="text-rosa-claro">Fineline?</span>
          </h3>
          
          <p className="text-white/90 text-xl leading-relaxed max-w-2xl mx-auto">
            Não perca a oportunidade de aprender a técnica mais valorizada do mercado
          </p>
          
          <div className="pt-8 border-t border-white/20 text-white/70 text-sm">
            <p>&copy; 2025 Curso Tatuagem Fineline. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}