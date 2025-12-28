import { neonAuth } from '@neondatabase/neon-js/auth/next';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const { user } = await neonAuth();

  if (!user) {
    redirect('/auth/sign-in');
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-400">
            Bem-vindo de volta, {user.email}!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Stats Cards */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-sm text-gray-400 mb-1">Projetos</div>
            <div className="text-3xl font-bold">0</div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-sm text-gray-400 mb-1">URLs Registradas</div>
            <div className="text-3xl font-bold">0</div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="text-sm text-gray-400 mb-1">Imagens Geradas</div>
            <div className="text-3xl font-bold">0</div>
          </div>
        </div>

        {/* Empty State */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Nenhum projeto ainda</h3>
            <p className="text-gray-400 mb-6">
              Crie seu primeiro projeto para começar a gerar imagens OG com IA.
            </p>
            <a
              href="/onboarding"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
            >
              Criar Projeto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
