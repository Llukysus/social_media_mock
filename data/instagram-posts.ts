import { InstagramPost, InstagramStory, InstagramSuggestion } from '../types/social';

// Instagram Posts Data - All 10 Quantum Physics Topics
export const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    username: 'quantum_prof',
    userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    postImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=500&fit=crop',
    likes: 1234,
    caption: '🌊⚛️ Wave-Particle Duality: The most mind-bending concept in quantum physics! Light behaves as both a wave AND a particle depending on how we observe it. This isn\'t just theory - it\'s the foundation of modern technology! #quantumphysics #waveparticle #physics #learning',
    comments: 23,
    timeAgo: '2h'
  },
  {
    id: 2,
    username: 'physics_educator',
    userImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
    postImage: 'https://images.unsplash.com/photo-1635070041408-e94f4f52d362?w=500&h=500&fit=crop',
    likes: 856,
    caption: '🎯 Superposition Principle: A quantum system can exist in multiple states simultaneously until observed! Think of Schrödinger\'s cat - it\'s both alive AND dead until you open the box. This is how quantum computers work! #superposition #quantumcomputing #schrodinger #physics',
    comments: 12,
    timeAgo: '4h'
  },
  {
    id: 3,
    username: 'quantum_researcher',
    userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    postImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=500&fit=crop',
    likes: 2100,
    caption: '🔗 Quantum Entanglement: Einstein called it "spooky action at a distance"! When two particles become entangled, measuring one instantly affects the other, no matter how far apart they are. This could revolutionize communication! #entanglement #quantum #einstein #spooky',
    comments: 45,
    timeAgo: '6h'
  },
  {
    id: 4,
    username: 'heisenberg_fan',
    userImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
    postImage: 'https://images.unsplash.com/photo-1635070041408-e94f4f52d362?w=500&h=500&fit=crop',
    likes: 567,
    caption: '📏 Heisenberg Uncertainty Principle: You can\'t know both the position AND momentum of a particle with perfect accuracy! The more precisely you measure one, the less you know about the other. It\'s not a limitation of our instruments - it\'s reality! #uncertainty #heisenberg #quantum #measurement',
    comments: 18,
    timeAgo: '8h'
  },
  {
    id: 5,
    username: 'tunnel_expert',
    userImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
    postImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=500&fit=crop',
    likes: 1890,
    caption: '🚇 Quantum Tunneling: Particles can pass through barriers they shouldn\'t be able to cross! This isn\'t science fiction - it powers flash memory, nuclear fusion in stars, and even helps explain how the sun shines! #tunneling #quantum #physics #stars',
    comments: 34,
    timeAgo: '12h'
  },
  {
    id: 6,
    username: 'uncertainty_expert',
    userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    postImage: 'https://images.unsplash.com/photo-1635070041408-e94f4f52d362?w=500&h=500&fit=crop',
    likes: 1456,
    caption: '📊 Uncertainty Principle in Action: For certain pairs of properties like position and momentum, the more precisely you measure one, the less you can know about the other. This is not a flaw of instruments but a built-in feature of quantum reality! #uncertainty #quantum #measurement #physics',
    comments: 67,
    timeAgo: '14h'
  },
  {
    id: 7,
    username: 'bloch_sphere_master',
    userImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
    postImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=500&fit=crop',
    likes: 2340,
    caption: '🌐 Bloch Sphere Snapshot: A simple way to picture the state of a qubit as a point on a globe, where the poles are zero and one, and everything in between is a mix. It shows how qubits can smoothly shift between states, unlike rigid classical bits! #blochsphere #quantumcomputing #qubit #visualization',
    comments: 89,
    timeAgo: '16h'
  },
  {
    id: 8,
    username: 'gate_operator',
    userImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
    postImage: 'https://images.unsplash.com/photo-1635070041408-e94f4f52d362?w=500&h=500&fit=crop',
    likes: 1789,
    caption: '⚡ Quantum Gates in One Example: A quantum gate changes the state of a qubit, just like a classical logic gate changes bits, but with the ability to rotate or flip superpositions. The Hadamard gate takes a qubit in zero and puts it into an equal mix of zero and one! #quantumgates #hadamard #quantumcomputing #algorithms',
    comments: 123,
    timeAgo: '18h'
  },
  {
    id: 9,
    username: 'tunneling_enthusiast',
    userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    postImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=500&fit=crop',
    likes: 2100,
    caption: '🚇 Quantum Tunneling in a Nutshell: When a particle passes through a barrier it should not cross in classical physics, thanks to its wave-like nature. This effect powers real technologies like flash memory and nuclear fusion in stars! #tunneling #quantum #physics #technology',
    comments: 156,
    timeAgo: '20h'
  },
  {
    id: 10,
    username: 'quantum_optimist',
    userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    postImage: 'https://images.unsplash.com/photo-1635070041408-e94f4f52d362?w=500&h=500&fit=crop',
    likes: 3456,
    caption: '🚀 Quantum Advantage Idea: The point where a quantum computer can solve a problem faster than any classical computer. This does not apply to every problem, but for certain tasks like factoring or simulating molecules, the difference can be enormous! #quantumadvantage #quantumcomputing #future #technology',
    comments: 234,
    timeAgo: '22h'
  }
];

// Instagram Stories Data - Learning Tips and Quick Concepts
export const instagramStories: InstagramStory[] = [
  { 
    id: 1, 
    username: 'your_learning', 
    userImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face', 
    isOwn: true 
  },
  { 
    id: 2, 
    username: 'quantum_tips', 
    userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' 
  },
  { 
    id: 3, 
    username: 'physics_daily', 
    userImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face' 
  },
  { 
    id: 4, 
    username: 'quantum_facts', 
    userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' 
  },
  { 
    id: 5, 
    username: 'learn_physics', 
    userImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face' 
  },
  { 
    id: 6, 
    username: 'quantum_insights', 
    userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' 
  }
];

// Instagram Suggestions Data - Suggested Learning Accounts
export const instagramSuggestions: InstagramSuggestion[] = [
  { 
    username: 'quantum_mechanics_pro', 
    name: 'Quantum Mechanics Pro', 
    userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' 
  },
  { 
    username: 'physics_explained', 
    name: 'Physics Explained', 
    userImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face' 
  },
  { 
    username: 'quantum_computing_101', 
    name: 'Quantum Computing 101', 
    userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' 
  },
  { 
    username: 'theoretical_physics', 
    name: 'Theoretical Physics', 
    userImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face' 
  }
];
