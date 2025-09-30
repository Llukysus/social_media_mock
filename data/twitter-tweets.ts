import { TwitterTweet, TwitterTrend } from '../types/social';

// Twitter Tweets Data - All 10 Quantum Physics Topics
export const twitterTweets: TwitterTweet[] = [
  {
    id: 1,
    username: 'wave_particle_prof',
    displayName: 'Wave-Particle Professor',
    userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    content: '🌊⚛️ Wave-Particle Duality: Light behaves as both a wave AND a particle depending on how we observe it. This isn\'t just theory - it\'s the foundation of modern technology! #WaveParticleDuality #QuantumPhysics',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop',
    likes: 12500,
    retweets: 4500,
    replies: 1200,
    timeAgo: '2h',
    isVerified: true,
    isFollowing: false,
    userId: 1
  },
  {
    id: 2,
    username: 'superposition_guru',
    displayName: 'Superposition Guru',
    userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    content: '🎯 Superposition Principle: A quantum system can exist in multiple states simultaneously until observed! Think Schrödinger\'s cat - both alive AND dead until you look! #Superposition #SchrodingerCat',
    likes: 8900,
    retweets: 2100,
    replies: 450,
    timeAgo: '4h',
    isVerified: false,
    isFollowing: true,
    userId: 2
  },
  {
    id: 3,
    username: 'entanglement_master',
    displayName: 'Entanglement Master',
    userImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
    content: '🔗 Quantum Entanglement: Einstein\'s "spooky action at a distance"! When two particles become entangled, measuring one instantly affects the other, no matter how far apart! #QuantumEntanglement #Einstein',
    image: 'https://images.unsplash.com/photo-1635070041408-e94f4f52d362?w=500&h=300&fit=crop',
    likes: 15600,
    retweets: 3200,
    replies: 780,
    timeAgo: '6h',
    isVerified: false,
    isFollowing: false,
    userId: 3
  },
  {
    id: 4,
    username: 'heisenberg_expert',
    displayName: 'Heisenberg Expert',
    userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    content: '📏 Heisenberg Uncertainty Principle: You can\'t know both position AND momentum perfectly! The more precisely you measure one, the less you know about the other. It\'s reality, not a bug! #UncertaintyPrinciple #Heisenberg',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop',
    likes: 12300,
    retweets: 2100,
    replies: 567,
    timeAgo: '8h',
    isVerified: true,
    isFollowing: true,
    userId: 4
  },
  {
    id: 5,
    username: 'tunneling_expert',
    displayName: 'Tunneling Expert',
    userImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
    content: '🚇 Quantum Tunneling: Particles can pass through barriers they shouldn\'t cross! This powers flash memory, nuclear fusion in stars, and even helps explain how the sun shines! #QuantumTunneling #Physics',
    likes: 18900,
    retweets: 3400,
    replies: 890,
    timeAgo: '10h',
    isVerified: false,
    isFollowing: false,
    userId: 5
  },
  {
    id: 6,
    username: 'uncertainty_prof',
    displayName: 'Uncertainty Professor',
    userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    content: '📊 Uncertainty Principle in Action: For certain pairs of properties, the more precisely you measure one, the less you know about the other. This is not a flaw of instruments but a built-in feature of quantum reality! #UncertaintyPrinciple #QuantumPhysics',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop',
    likes: 12500,
    retweets: 4500,
    replies: 1200,
    timeAgo: '12h',
    isVerified: true,
    isFollowing: false,
    userId: 6
  },
  {
    id: 7,
    username: 'bloch_sphere_guru',
    displayName: 'Bloch Sphere Guru',
    userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    content: '🌐 Bloch Sphere Snapshot: A simple way to visualize qubit states as points on a globe. Poles are 0 and 1, everything in between is a superposition. This visualization is crucial for understanding quantum algorithms! #BlochSphere #QuantumComputing',
    likes: 8900,
    retweets: 2100,
    replies: 450,
    timeAgo: '14h',
    isVerified: false,
    isFollowing: true,
    userId: 7
  },
  {
    id: 8,
    username: 'quantum_gate_master',
    displayName: 'Quantum Gate Master',
    userImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
    content: '⚡ Quantum Gates in One Example: The Hadamard gate takes a qubit in state |0⟩ and puts it into an equal superposition of |0⟩ and |1⟩. This is the foundation of quantum computing! #QuantumGates #HadamardGate',
    image: 'https://images.unsplash.com/photo-1635070041408-e94f4f52d362?w=500&h=300&fit=crop',
    likes: 5600,
    retweets: 890,
    replies: 234,
    timeAgo: '16h',
    isVerified: false,
    isFollowing: false,
    userId: 8
  },
  {
    id: 9,
    username: 'tunneling_enthusiast',
    displayName: 'Tunneling Enthusiast',
    userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    content: '🚇 Quantum Tunneling in a Nutshell: When a particle passes through a barrier it should not cross in classical physics, thanks to its wave-like nature. This effect powers real technologies like flash memory and nuclear fusion in stars! #QuantumTunneling #Physics',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop',
    likes: 12300,
    retweets: 2100,
    replies: 567,
    timeAgo: '18h',
    isVerified: true,
    isFollowing: true,
    userId: 9
  },
  {
    id: 10,
    username: 'quantum_advantage',
    displayName: 'Quantum Advantage',
    userImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
    content: '🚀 Quantum Advantage Idea: The point where quantum computers solve problems faster than classical ones. Not for every problem, but for factoring and molecular simulation, the difference can be enormous! #QuantumAdvantage #QuantumComputing',
    likes: 3400,
    retweets: 567,
    replies: 123,
    timeAgo: '20h',
    isVerified: false,
    isFollowing: false,
    userId: 10
  }
];

// Twitter Trends Data - Quantum Physics Learning Topics
export const twitterTrends: TwitterTrend[] = [
  {
    id: 1,
    hashtag: '#QuantumPhysics',
    tweets: 125000,
    category: 'Science'
  },
  {
    id: 2,
    hashtag: '#QuantumComputing',
    tweets: 89000,
    category: 'Technology'
  },
  {
    id: 3,
    hashtag: '#UncertaintyPrinciple',
    tweets: 23400,
    category: 'Education'
  },
  {
    id: 4,
    hashtag: '#QuantumTunneling',
    tweets: 6700,
    category: 'Physics'
  },
  {
    id: 5,
    hashtag: '#BlochSphere',
    tweets: 15600,
    category: 'QuantumComputing'
  }
];
