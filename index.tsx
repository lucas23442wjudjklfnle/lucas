import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  ArrowRight, 
  Brain, 
  Image as ImageIcon, 
  Video, 
  User, 
  MessageSquare, 
  Mic, 
  Menu, 
  X,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Star,
  ShieldCheck,
  Zap,
  PlayCircle,
  Clock,
  Lock,
  CreditCard,
  ChevronLeft,
  Check,
  QrCode,
  Copy,
  Smartphone,
  AlertCircle,
  Mail,
  Key
} from 'lucide-react';

// --- Types ---
interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

// --- Utilities ---
const scrollToPricing = () => {
  const element = document.getElementById('pricing');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToFeatures = () => {
  const element = document.getElementById('features');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// --- Components ---

const Navbar = ({ onNavigate }: { onNavigate: (view: 'landing' | 'login' | 'payment' | 'success') => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => { onNavigate('landing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Sparkles size={18} className="text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">AivanaLabs</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#features" 
            className="text-sm text-gray-300 hover:text-white transition-colors" 
            onClick={(e) => { 
              e.preventDefault(); 
              onNavigate('landing'); 
              setTimeout(scrollToFeatures, 100); 
            }}
          >
            Funcionalidades
          </a>
          <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); onNavigate('landing'); setTimeout(scrollToPricing, 100); }}>Planos</a>
          
          <div className="flex items-center gap-4 ml-4">
            <button 
              onClick={() => onNavigate('login')}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Já tenho conta
            </button>
            <button 
              onClick={() => { onNavigate('landing'); setTimeout(scrollToPricing, 100); }}
              className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-gray-200 text-sm font-bold transition-all flex items-center gap-2 group shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              Começar Agora
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#030305] border-b border-white/10 md:hidden p-6 flex flex-col gap-4 shadow-2xl animate-fade-in">
          <button className="text-lg text-gray-300 py-2 border-b border-white/5 text-left" onClick={() => { setIsOpen(false); onNavigate('landing'); }}>Home</button>
          <button className="text-lg text-gray-300 py-2 border-b border-white/5 text-left" onClick={() => { setIsOpen(false); onNavigate('landing'); setTimeout(scrollToFeatures, 100); }}>Funcionalidades</button>
          <button className="text-lg text-gray-300 py-2 border-b border-white/5 text-left" onClick={() => { setIsOpen(false); onNavigate('landing'); setTimeout(scrollToPricing, 100); }}>Planos</button>
          <button className="text-lg text-gray-300 py-2 border-b border-white/5 text-left" onClick={() => { setIsOpen(false); onNavigate('login'); }}>Login</button>
          <div className="flex flex-col gap-3 mt-4">
            <button 
              onClick={() => { setIsOpen(false); onNavigate('landing'); setTimeout(scrollToPricing, 100); }} 
              className="w-full py-3 rounded-lg bg-indigo-600 text-white font-bold"
            >
              Começar Agora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="blob w-[500px] h-[500px] bg-indigo-600/20 rounded-full top-0 left-[-100px]"></div>
      <div className="blob w-[400px] h-[400px] bg-pink-600/20 rounded-full bottom-0 right-[-100px] animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs font-medium text-indigo-300 tracking-wide uppercase">Plataforma Brasileira de IA</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              Crie Conteúdo <br />
              <span className="text-gradient">Profissional com IA</span> <br />
              em Minutos
            </h1>
            
            <p className="text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Imagens, vídeos, avatares e vozes realistas com as melhores IAs do mundo — tudo em um só lugar.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToPricing}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.6)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1 shadow-lg ring-1 ring-white/10"
              >
                Começar Agora
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-gray-500 pt-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-green-400" />
                <span>Pagamento seguro</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap size={16} className="text-yellow-400" />
                <span>Ativação instantânea</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageSquare size={16} className="text-indigo-400" />
                <span>Suporte em português</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="relative w-full aspect-[4/3] max-w-[600px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              
              <div className="absolute inset-0 bg-[#0f0f12]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col overflow-hidden">
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">GERANDO CONTEÚDO...</div>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-4">
                   <div className="bg-white/5 rounded-xl p-4 flex flex-col gap-3 relative overflow-hidden group">
                      <div className="absolute top-2 right-2 p-1 bg-black/50 rounded-md text-xs text-white z-10">Midjourney V6</div>
                      <div className="w-full h-32 bg-indigo-500/20 rounded-lg animate-pulse overflow-hidden relative">
                         <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" className="object-cover w-full h-full opacity-60" alt="AI Art" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                        <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                      </div>
                   </div>

                   <div className="bg-white/5 rounded-xl p-4 flex flex-col gap-3 relative overflow-hidden">
                      <div className="absolute top-2 right-2 p-1 bg-black/50 rounded-md text-xs text-white z-10">Kling AI</div>
                      <div className="w-full h-32 bg-pink-500/20 rounded-lg flex items-center justify-center">
                         <PlayCircle className="text-white/80" size={32} />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                        <div className="h-2 w-full bg-white/10 rounded"></div>
                      </div>
                   </div>
                </div>
              </div>

              <div className="absolute -right-6 top-20 glass p-4 rounded-xl animate-[float_4s_ease-in-out_infinite]">
                 <div className="flex items-center gap-3">
                    <User className="text-pink-400" size={24} />
                    <div>
                       <div className="text-xs font-bold">Avatar Falante</div>
                       <div className="text-[10px] text-green-400">Renderizando</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EmotionalBlock = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#030305] to-[#0a0a0c] border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Não é sobre tecnologia. <br/>
          <span className="text-indigo-400">É sobre liberdade.</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
          "Você não precisa aparecer. Não precisa dominar ferramentas complexas. 
          Não precisa gastar com equipe. <strong className="text-white font-medium">Você só cria.</strong> A IA faz o resto."
        </p>
      </div>
    </section>
  );
};

const Features = () => {
  const [visible, setVisible] = useState<boolean[]>([]);
  
  const features = [
    {
      icon: <ImageIcon size={32} className="text-indigo-400" />,
      title: "Geração de Imagens",
      desc: "Crie imagens fotorrealistas e artísticas em qualidade profissional para redes sociais, anúncios e marcas."
    },
    {
      icon: <Video size={32} className="text-pink-400" />,
      title: "Geração de Vídeos",
      desc: "Produza vídeos cinematográficos a partir de texto ou imagens, prontos para engajar sua audiência."
    },
    {
      icon: <User size={32} className="text-cyan-400" />,
      title: "Avatares Personalizados",
      desc: "Crie avatares únicos com sua identidade e gere conteúdo em vídeo sem precisar aparecer na câmera."
    },
    {
      icon: <MessageSquare size={32} className="text-green-400" />,
      title: "Chat com IA",
      desc: "Tenha acesso às IAs mais inteligentes do mundo (GPT-4, Claude, Gemini) para qualquer tarefa de texto."
    },
    {
      icon: <Mic size={32} className="text-orange-400" />,
      title: "Áudio com IA",
      desc: "Transforme texto em vozes naturais e profissionais com entonação humana para seus vídeos."
    }
  ];

  useEffect(() => {
    setVisible(new Array(features.length).fill(false));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setVisible((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.feature-card').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [features.length]);

  return (
    <section id="features" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Tudo o que Você Precisa</h2>
          <p className="text-gray-400 text-lg">
            Uma suíte completa de ferramentas para potencializar sua criatividade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              data-index={idx}
              className={`feature-card transition-all duration-700 ease-out transform ${
                visible[idx] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="glass p-8 rounded-2xl card-hover transition-all duration-300 group relative overflow-hidden h-full">
                <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors border border-white/5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="py-16 border-y border-white/5 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="p-4">
            <div className="text-4xl font-bold text-white mb-2">10.000+</div>
            <div className="text-indigo-400 font-medium">Usuários ativos</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-white mb-2">500.000+</div>
            <div className="text-pink-400 font-medium">Criações geradas</div>
          </div>
          <div className="p-4 flex flex-col items-center justify-center">
            <div className="flex items-center gap-1 mb-2 text-yellow-400">
               <Star fill="currentColor" size={24} />
               <Star fill="currentColor" size={24} />
               <Star fill="currentColor" size={24} />
               <Star fill="currentColor" size={24} />
               <Star fill="currentColor" size={24} />
            </div>
            <div className="text-gray-400 font-medium">Avaliação média 5/5</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ onSelectPlan }: { onSelectPlan: (plan: Plan) => void }) => {
  const plans: Plan[] = [
    {
      id: 'start',
      name: 'Start',
      price: '49',
      features: ['500 créditos mensais', 'Geração de Imagens', 'Chat Ilimitado', 'Suporte Básico']
    },
    {
      id: 'creator',
      name: 'Creator',
      price: '97',
      popular: true,
      features: ['2.500 créditos mensais', 'Vídeos em HD', 'Avatares Personalizados', 'Clonagem de Voz', 'Suporte Prioritário']
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '197',
      features: ['10.000 créditos mensais', 'Acesso via API', 'Múltiplos Usuários', 'Consultoria de IA', 'Gerente de Conta']
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-black/40 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 w-fit mx-auto mb-6">
              <Clock size={14} className="text-red-400" />
              <span className="text-xs font-bold text-red-300 tracking-wide uppercase">Oferta por tempo limitado</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Escolha o Plano Ideal para Você</h2>
          <p className="text-gray-400 text-lg mb-4">
            Acesso completo a todas as ferramentas de IA desde o primeiro dia.
          </p>
          <p className="text-indigo-400 font-medium text-sm flex items-center justify-center gap-2">
            <Zap size={16} /> Ativação imediata após o pagamento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`glass p-8 rounded-2xl border flex flex-col hover:border-white/20 transition-all ${plan.popular ? 'border-indigo-500/50 bg-indigo-900/10 relative transform md:-translate-y-4 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]' : 'border-white/10'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Mais Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6">R$ {plan.price}<span className="text-sm font-normal text-gray-500">/mês</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={16} className={plan.popular ? "text-white" : "text-indigo-400"}/> 
                    {feat}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onSelectPlan(plan)}
                className={`w-full py-3 rounded-lg transition-colors font-bold ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg' : 'border border-white/20 hover:bg-white/10'}`}
              >
                Escolher Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PaymentPage = ({ plan, onBack, onComplete }: { plan: Plan, onBack: () => void, onComplete: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [method, setMethod] = useState<'card' | 'pix'>('card');
  const [copied, setCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    cpf: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  // Random PIX Copy Paste code simulation
  const pixCode = "00020126580014BR.GOV.BCB.PIX0136aivanalabs@pagamentos.com.br520400005303986540510.005802BR5913Aivana Labs6008Sao Paulo62070503***63041A2B";

  const handleCopyPix = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(pixCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
  };

  const validateField = (name: string, value: string) => {
    let error = '';
    const cleanValue = value.replace(/\D/g, '');

    switch (name) {
      case 'cardNumber':
        if (cleanValue.length < 16) error = 'Número do cartão inválido (mínimo 16 dígitos)';
        break;
      case 'expiry':
        if (cleanValue.length < 4) {
          error = 'Data incompleta';
        } else {
          const month = parseInt(cleanValue.substring(0, 2));
          const year = parseInt(cleanValue.substring(2, 4));
          const currentYear = new Date().getFullYear() % 100;
          
          if (month < 1 || month > 12) error = 'Mês inválido';
          else if (year < currentYear || (year === currentYear && month < new Date().getMonth() + 1)) error = 'Cartão expirado';
        }
        break;
      case 'cvv':
        if (cleanValue.length < 3) error = 'CVV inválido';
        break;
      case 'cpf':
        if (cleanValue.length < 11) error = 'CPF inválido';
        break;
      case 'name':
        if (value.trim().split(' ').length < 2) error = 'Digite o nome completo';
        break;
    }
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Input Masks
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\D/g, '').substring(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ');
    } else if (name === 'expiry') {
      formattedValue = value.replace(/\D/g, '').substring(0, 4).replace(/(\d{2})(?=\d)/, '$1/');
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').substring(0, 4);
    } else if (name === 'cpf') {
      formattedValue = value.replace(/\D/g, '').substring(0, 11)
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));

    // Clear error while typing
    if (errors[name as keyof typeof errors]) {
       setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handlePayment = (e: React.SyntheticEvent) => {
    e.preventDefault();
    
    if (method === 'card') {
      const newErrors = {
        name: validateField('name', formData.name),
        cpf: validateField('cpf', formData.cpf),
        cardNumber: validateField('cardNumber', formData.cardNumber),
        expiry: validateField('expiry', formData.expiry),
        cvv: validateField('cvv', formData.cvv),
      };

      if (Object.values(newErrors).some(err => err)) {
        setErrors(newErrors);
        return;
      }
    }

    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      onComplete();
    }, 2500);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#030305] flex items-center justify-center px-4">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        
        {/* Left: Summary */}
        <div className="space-y-8">
          <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ChevronLeft size={20} /> Voltar para Planos
          </button>
          
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Finalize seu Acesso</h1>
            <p className="text-gray-400">Pague com PIX ou cartão e comece a usar agora mesmo.</p>
          </div>

          <div className="glass p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-6">
              <div>
                <div className="text-sm text-gray-400 mb-1">Plano Escolhido</div>
                <div className="text-2xl font-bold text-white">{plan.name}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400 mb-1">Valor Mensal</div>
                <div className="text-2xl font-bold text-indigo-400">R$ {plan.price}</div>
              </div>
            </div>
            
            <ul className="space-y-3 mb-6">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-indigo-400" />
                  </div>
                  {feat}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-gray-500 bg-black/20 p-3 rounded-lg">
                <ShieldCheck size={14} className="text-green-500" />
                Garantia de segurança SSL de 256-bits.
              </div>
              {method === 'pix' && (
                <div className="flex items-center gap-2 text-xs text-gray-500 bg-black/20 p-3 rounded-lg">
                  <Zap size={14} className="text-yellow-500" />
                  Liberação imediata com PIX.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Payment Form */}
        <div className="glass p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col">
           {/* Decorative */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <CreditCard size={20} className="text-indigo-400" />
              Método de Pagamento
            </h2>

            {/* Method Tabs */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button 
                onClick={() => setMethod('card')}
                className={`flex items-center justify-center gap-2 py-3 rounded-lg border transition-all ${method === 'card' ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-transparent border-white/10 text-gray-400 hover:bg-white/5'}`}
              >
                <CreditCard size={18} />
                Cartão
              </button>
              <button 
                onClick={() => setMethod('pix')}
                className={`flex items-center justify-center gap-2 py-3 rounded-lg border transition-all ${method === 'pix' ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-transparent border-white/10 text-gray-400 hover:bg-white/5'}`}
              >
                <QrCode size={18} />
                PIX
              </button>
            </div>

            {method === 'card' ? (
              <form onSubmit={handlePayment} className="space-y-5 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Nome no Cartão</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required 
                    type="text" 
                    placeholder="Nome impresso no cartão" 
                    className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-indigo-500'}`}
                  />
                  {errors.name && <div className="flex items-center gap-1 text-xs text-red-500 mt-1"><AlertCircle size={12}/>{errors.name}</div>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">CPF / CNPJ</label>
                  <input 
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required 
                    type="text" 
                    placeholder="000.000.000-00" 
                    className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors ${errors.cpf ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-indigo-500'}`}
                  />
                  {errors.cpf && <div className="flex items-center gap-1 text-xs text-red-500 mt-1"><AlertCircle size={12}/>{errors.cpf}</div>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Número do Cartão</label>
                  <div className="relative">
                    <input 
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required 
                      type="text" 
                      placeholder="0000 0000 0000 0000" 
                      className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors ${errors.cardNumber ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-indigo-500'}`}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                      <div className="w-8 h-5 bg-white/10 rounded"></div>
                      <div className="w-8 h-5 bg-white/10 rounded"></div>
                    </div>
                  </div>
                  {errors.cardNumber && <div className="flex items-center gap-1 text-xs text-red-500 mt-1"><AlertCircle size={12}/>{errors.cardNumber}</div>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Validade</label>
                    <input 
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required 
                      type="text" 
                      placeholder="MM/AA" 
                      className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors ${errors.expiry ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-indigo-500'}`}
                    />
                    {errors.expiry && <div className="flex items-center gap-1 text-xs text-red-500 mt-1"><AlertCircle size={12}/>{errors.expiry}</div>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">CVV</label>
                    <input 
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required 
                      type="text" 
                      placeholder="123" 
                      className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors ${errors.cvv ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-indigo-500'}`}
                    />
                    {errors.cvv && <div className="flex items-center gap-1 text-xs text-red-500 mt-1"><AlertCircle size={12}/>{errors.cvv}</div>}
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-indigo-500/20 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processando...
                      </>
                    ) : (
                      <>
                        <Lock size={18} />
                        Pagar e Ativar Acesso
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6 animate-fade-in text-center pt-2">
                 <div className="bg-white p-4 rounded-xl inline-block shadow-lg mx-auto">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${pixCode}&bgcolor=ffffff`} 
                      alt="QR Code PIX" 
                      className="w-40 h-40 mix-blend-multiply" 
                    />
                 </div>
                 
                 <div className="text-sm text-gray-400">
                    Abra o app do seu banco e escaneie o código acima para pagar instantaneamente.
                 </div>

                 <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Ou copie o código PIX</label>
                    <div className="flex gap-2">
                       <input 
                         readOnly 
                         value={pixCode} 
                         className="flex-1 bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-500 text-xs truncate focus:outline-none" 
                       />
                       <button 
                          onClick={handleCopyPix}
                          className="bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg px-4 flex items-center justify-center transition-colors text-white"
                        >
                          {copied ? <Check size={18} className="text-green-400"/> : <Copy size={18} />}
                       </button>
                    </div>
                    {copied && <span className="text-xs text-green-400 block text-right">Código copiado!</span>}
                 </div>

                 <div className="pt-4">
                  <button 
                    onClick={(e) => handlePayment(e)}
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-green-500/20 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <>
                         <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                         Verificando Pagamento...
                      </>
                    ) : (
                      <>
                        <Smartphone size={18} />
                        Já fiz o pagamento
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            <p className="text-center text-xs text-gray-500 mt-4">
              Pagamento processado de forma segura pelo Stripe.
              <br/>Seus dados estão protegidos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuccessPage = ({ onNavigate }: { onNavigate: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-[#030305] px-6 text-center">
    <div className="max-w-md w-full space-y-6">
      <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 size={40} className="text-green-500" />
      </div>
      <h1 className="text-3xl font-bold text-white">Acesso Liberado!</h1>
      <p className="text-gray-400">
        Sua conta foi criada e ativada com sucesso. Enviamos os dados de acesso para o seu e-mail.
      </p>
      <div className="pt-6">
         <button 
          onClick={onNavigate}
          className="w-full py-4 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-colors"
         >
            Acessar Dashboard
         </button>
      </div>
    </div>
  </div>
);

const LoginPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030305] px-6 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="blob w-[400px] h-[400px] bg-indigo-600/20 rounded-full top-[-100px] left-[-100px]"></div>
      <div className="blob w-[300px] h-[300px] bg-pink-600/20 rounded-full bottom-[-50px] right-[-50px] animation-delay-2000"></div>

      <div className="max-w-md w-full glass p-8 rounded-2xl border border-white/10 relative z-10">
        <button onClick={onBack} className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors">
          <ChevronLeft size={24} />
        </button>

        <div className="text-center mb-8 mt-4">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/20">
            <Sparkles size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Bem-vindo de volta</h1>
          <p className="text-gray-400 text-sm">Acesse sua conta para continuar criando.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="email" 
                placeholder="seu@email.com" 
                className="w-full bg-black/40 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
               <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Senha</label>
               <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300">Esqueceu a senha?</a>
            </div>
            <div className="relative">
              <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-black/40 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          <button className="w-full py-3.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-lg shadow-indigo-500/25 mt-2">
            Entrar na Plataforma
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          Ainda não tem conta? <button onClick={onBack} className="text-white hover:underline">Criar conta</button>
        </p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-pink-500 rounded flex items-center justify-center">
                <Sparkles size={14} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">AivanaLabs</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-6">
              AivanaLabs é a plataforma brasileira líder em criação de conteúdo com Inteligência Artificial.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Ferramentas</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">Gerador de Imagens</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">Vídeos com IA</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">Avatares Falantes</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">Termos de Uso</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">Privacidade</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">Contato</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2024 AivanaLabs Brasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const CTA = ({ onNavigate }: { onNavigate: () => void }) => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-indigo-900/40 to-pink-900/40 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto rounded-3xl relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm text-center p-12 md:p-20 z-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="relative z-10">
          <Sparkles className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Pronto para Criar Conteúdo Profissional?</h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10">
            Junte-se a milhares de criadores que já estão revolucionando sua produção de conteúdo com a AivanaLabs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => { onNavigate(); setTimeout(scrollToPricing, 100); }}
              className="px-10 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
            >
              Começar Agora
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
             <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500"/> Cancele quando quiser</span>
             <span className="flex items-center gap-1"><Lock size={14} className="text-green-500"/> Pagamento seguro</span>
             <span className="flex items-center gap-1"><Zap size={14} className="text-green-500"/> Sem burocracia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---
const App = () => {
  const [view, setView] = useState<'landing' | 'payment' | 'success' | 'login'>('landing');
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setView('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (view === 'login') {
    return <LoginPage onBack={() => setView('landing')} />;
  }

  if (view === 'success') {
    return <SuccessPage onNavigate={() => setView('login')} />;
  }

  if (view === 'payment' && selectedPlan) {
    return (
      <div className="bg-[#030305] text-white selection:bg-indigo-500/30 font-sans">
        <Navbar onNavigate={setView} />
        <PaymentPage 
          plan={selectedPlan} 
          onBack={() => { setView('landing'); setTimeout(scrollToPricing, 100); }} 
          onComplete={() => setView('success')}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#030305] text-white selection:bg-indigo-500/30 font-sans">
      <Navbar onNavigate={setView} />
      <Hero />
      <SocialProof />
      <EmotionalBlock />
      <Features />
      <Pricing onSelectPlan={handleSelectPlan} />
      <CTA onNavigate={() => setView('landing')} />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);