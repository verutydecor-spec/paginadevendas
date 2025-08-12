import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-400 hover:text-brand-purple" target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <SocialIcon href="https://instagram.com">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c-4.01.083-5.54.495-6.623 2.015-1.083 1.52-.96 3.65.315 6.623.63 1.49.98 2.31.98 4.352 0 2.042-.35 2.862-.98 4.352-1.275 2.973-1.398 5.103-.315 6.623 1.083 1.52 2.613 1.932 6.623 2.015 4.01.083 5.54-.335 6.623-1.815 1.083-1.48.96-3.65-.315-6.623-.63-1.49-.98-2.31-.98-4.352 0-2.042.35-2.862.98-4.352 1.275-2.973 1.398-5.103.315-6.623-1.083-1.52-2.613-1.932-6.623-2.015zm0 1.44c3.849 0 5.18.39 6.224 1.83.945 1.32.86 3.23-.33 6.224-.585 1.44-.925 2.2-.925 4.006s.34 2.566.925 4.006c1.19 2.994 1.275 4.904.33 6.224-1.045 1.44-2.375 1.83-6.224 1.83-3.849 0-5.18-.39-6.224-1.83-.945-1.32-.86-3.23.33-6.224.585 1.44.925-2.2.925-4.006s-.34-2.566-.925-4.006c-1.19-2.994-1.275-4.904-.33-6.224C7.135 3.83 8.465 3.44 12.315 3.44zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.44a2.31 2.31 0 110 4.62 2.31 2.31 0 010-4.62zm4.335-2.25a.96.96 0 100-1.92.96.96 0 000 1.92z" clipRule="evenodd" />
            </svg>
          </SocialIcon>
          <SocialIcon href="https://facebook.com">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </SocialIcon>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
            <a href="#" className="hover:text-white mx-2">Termos de Uso</a>
            |
            <a href="#" className="hover:text-white mx-2">Política de Privacidade</a>
        </div>
        <p className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Pilates na Parede. Todos os direitos reservados.
        </p>
        <p className="mt-4 text-center text-xs text-gray-500">
          Este produto não substitui o parecer profissional. Sempre consulte um profissional da saúde para tratar de assuntos relativos à saúde.
        </p>
      </div>
    </footer>
  );
};

export default Footer;