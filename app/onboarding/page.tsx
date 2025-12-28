'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Step = 'project' | 'template' | 'api-keys' | 'complete';

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>('project');
  const [loading, setLoading] = useState(false);

  // Form state
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [templateChoice, setTemplateChoice] = useState<'default' | 'custom'>('default');
  const [customTemplate, setCustomTemplate] = useState('');
  const [aiProvider, setAiProvider] = useState<'openai' | 'claude'>('openai');
  const [apiKey, setApiKey] = useState('');

  const handleNext = async () => {
    setLoading(true);

    if (currentStep === 'project') {
      if (!projectName) {
        alert('Por favor, dê um nome ao seu projeto');
        setLoading(false);
        return;
      }
      setCurrentStep('template');
    } else if (currentStep === 'template') {
      setCurrentStep('api-keys');
    } else if (currentStep === 'api-keys') {
      // Save everything and redirect to dashboard
      try {
        // TODO: Create project API call
        setCurrentStep('complete');
      } catch (error) {
        console.error('Error creating project:', error);
        alert('Erro ao criar projeto. Tente novamente.');
      }
    }

    setLoading(false);
  };

  const handleSkip = () => {
    if (currentStep === 'api-keys') {
      setCurrentStep('complete');
    }
  };

  const handleComplete = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{
                    width: currentStep === 'project' ? '33%' :
                           currentStep === 'template' ? '66%' :
                           currentStep === 'api-keys' ? '100%' : '100%'
                  }}
                />
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            {currentStep === 'project' && 'Passo 1 de 3: Criar seu primeiro projeto'}
            {currentStep === 'template' && 'Passo 2 de 3: Escolher template'}
            {currentStep === 'api-keys' && 'Passo 3 de 3: Configurar IA'}
            {currentStep === 'complete' && 'Configuração completa!'}
          </p>
        </div>

        {/* Step: Project */}
        {currentStep === 'project' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Crie seu primeiro projeto</h1>
              <p className="text-gray-400">
                Projetos agrupam suas imagens OG por tema, produto ou campanha.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nome do Projeto *
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="ex: Blog Pessoal, E-commerce, etc"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Descrição (opcional)
                </label>
                <textarea
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Descreva o propósito deste projeto..."
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={loading || !projectName}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg font-medium transition-colors"
            >
              {loading ? 'Aguarde...' : 'Continuar'}
            </button>
          </div>
        )}

        {/* Step: Template */}
        {currentStep === 'template' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Escolha um template</h1>
              <p className="text-gray-400">
                Templates definem o layout visual das suas imagens OG.
              </p>
            </div>

            <div className="space-y-4">
              {/* Default Template */}
              <button
                onClick={() => setTemplateChoice('default')}
                className={`w-full p-6 rounded-lg border-2 text-left transition-all ${
                  templateChoice === 'default'
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-800 bg-gray-900 hover:border-gray-700'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full border-2 border-current flex items-center justify-center">
                    {templateChoice === 'default' && (
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Template Padrão</h3>
                    <p className="text-sm text-gray-400">
                      Comece com nosso template limpo e moderno. Você pode customizar depois.
                    </p>
                  </div>
                </div>
              </button>

              {/* Custom Template */}
              <button
                onClick={() => setTemplateChoice('custom')}
                className={`w-full p-6 rounded-lg border-2 text-left transition-all ${
                  templateChoice === 'custom'
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-800 bg-gray-900 hover:border-gray-700'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full border-2 border-current flex items-center justify-center">
                    {templateChoice === 'custom' && (
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Template Customizado</h3>
                    <p className="text-sm text-gray-400 mb-3">
                      Cole seu próprio HTML com variáveis like {`{{headline}}`} e {`{{description}}`}.
                    </p>
                    {templateChoice === 'custom' && (
                      <textarea
                        value={customTemplate}
                        onChange={(e) => setCustomTemplate(e.target.value)}
                        placeholder="<div>{{headline}}</div>"
                        rows={4}
                        className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-sm font-mono focus:outline-none focus:border-blue-500"
                        onClick={(e) => e.stopPropagation()}
                      />
                    )}
                  </div>
                </div>
              </button>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setCurrentStep('project')}
                className="flex-1 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors"
              >
                Voltar
              </button>
              <button
                onClick={handleNext}
                disabled={loading}
                className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 rounded-lg font-medium transition-colors"
              >
                {loading ? 'Aguarde...' : 'Continuar'}
              </button>
            </div>
          </div>
        )}

        {/* Step: API Keys */}
        {currentStep === 'api-keys' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Configure a IA</h1>
              <p className="text-gray-400">
                Suas API keys são criptografadas e usadas apenas para gerar copy personalizada.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3">
                  Provedor de IA
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setAiProvider('openai')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      aiProvider === 'openai'
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-gray-800 bg-gray-900 hover:border-gray-700'
                    }`}
                  >
                    <div className="font-semibold mb-1">OpenAI</div>
                    <div className="text-xs text-gray-400">GPT-4</div>
                  </button>
                  <button
                    onClick={() => setAiProvider('claude')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      aiProvider === 'claude'
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-gray-800 bg-gray-900 hover:border-gray-700'
                    }`}
                  >
                    <div className="font-semibold mb-1">Claude</div>
                    <div className="text-xs text-gray-400">Sonnet 3.5</div>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {aiProvider === 'openai' ? 'OpenAI' : 'Claude'} API Key
                </label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder={aiProvider === 'openai' ? 'sk-...' : 'sk-ant-...'}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 font-mono text-sm"
                />
                <p className="mt-2 text-xs text-gray-500">
                  Você pode adicionar ou alterar sua API key depois em Configurações.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setCurrentStep('template')}
                className="flex-1 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors"
              >
                Voltar
              </button>
              <button
                onClick={handleSkip}
                className="flex-1 px-6 py-3 border border-gray-700 hover:bg-gray-800 rounded-lg font-medium transition-colors"
              >
                Pular
              </button>
              <button
                onClick={handleNext}
                disabled={loading}
                className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 rounded-lg font-medium transition-colors"
              >
                {loading ? 'Salvando...' : 'Finalizar'}
              </button>
            </div>
          </div>
        )}

        {/* Step: Complete */}
        {currentStep === 'complete' && (
          <div className="text-center space-y-8">
            <div>
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-2">Tudo pronto!</h1>
              <p className="text-gray-400">
                Seu projeto <span className="text-white font-medium">{projectName}</span> foi criado com sucesso.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-left">
              <h3 className="font-semibold mb-4">Próximos passos:</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500">→</span>
                  <span>Registre suas primeiras URLs para gerar imagens OG</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500">→</span>
                  <span>Customize seu template HTML e metaprompt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500">→</span>
                  <span>Veja suas imagens serem geradas automaticamente</span>
                </li>
              </ul>
            </div>

            <button
              onClick={handleComplete}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
            >
              Ir para Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
