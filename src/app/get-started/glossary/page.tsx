'use client';

import { useState, useMemo } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Search, BookOpen } from 'lucide-react';

// This would normally be in metadata but we need client component for interactivity
// export const metadata: Metadata = {
//   title: 'Padel Glossary: 100+ Terms Defined | Learn the Language of Padel',
//   description: 'Complete A-Z padel glossary with 100+ terms defined. From bandeja to víbora, learn every padel term with pronunciations, examples, and video tutorials.',
// };

interface Term {
  id: string;
  name: string;
  pronunciation?: string;
  category: string;
  skillLevel: string;
  definition: string;
  usage?: string;
  difficulty?: string;
  seeAlso?: string[];
  hasVideo?: boolean;
  videoId?: string;
}

const categories = [
  'All Terms',
  'Shots & Techniques',
  'Equipment',
  'Court & Facilities',
  'Rules & Scoring',
  'Strategy & Tactics',
  'Organizations'
];

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const glossaryTerms: Term[] = [
  {
    id: 'ace',
    name: 'Ace',
    pronunciation: 'ACE (English)',
    category: 'Rules & Scoring',
    skillLevel: 'All levels',
    definition: 'A serve that lands in the service box and is untouched by the receiving team, resulting in an immediate point for the server. Rare in padel due to underhand serve requirement.',
    usage: 'Unlike tennis, aces are uncommon—serves are about placement and starting the rally, not winning the point outright.',
    difficulty: '⭐⭐⭐⭐ (Hard to achieve in padel)',
    seeAlso: ['serve', 'service-box']
  },
  {
    id: 'advantage',
    name: 'Advantage (Ad)',
    pronunciation: 'ad-VAN-tij',
    category: 'Rules & Scoring',
    skillLevel: 'All levels',
    definition: 'The score after deuce when one team has won a point but hasn\'t secured the game yet. Must win next point to win game, or return to deuce.',
    usage: 'At deuce (40-40), winning the next point gives you "advantage in". If you win the next point, you win the game. If opponents win, back to deuce.',
    seeAlso: ['deuce', 'golden-point']
  },
  {
    id: 'americano-format',
    name: 'Americano Format',
    pronunciation: 'ah-mare-ee-CAH-no',
    category: 'Game Formats',
    skillLevel: 'All levels',
    definition: 'Popular round-robin tournament format where every player partners with every other player and competes against all opponents. Points accumulate individually.',
    usage: 'Most clubs use Americano format for social tournaments and weekly mixers because it ensures everyone plays together, meets new players, and has equal court time.',
    difficulty: '⭐ (Easy format to understand)',
    seeAlso: ['mexicano', 'round-robin']
  },
  {
    id: 'back-wall',
    name: 'Back Wall',
    category: 'Court & Facilities',
    skillLevel: 'All levels',
    definition: 'The 10-13 foot high glass wall at the baseline (back) of each side of the padel court. Ball can legally bounce off this wall after bouncing on the ground.',
    usage: 'After opponent\'s shot bounces in your court, it often hits the back wall. You can let it bounce off the wall before hitting it back. This is fundamental to padel.',
    seeAlso: ['side-wall', 'contrapared', 'wall-play']
  },
  {
    id: 'bajada-de-pared',
    name: 'Bajada de Pared',
    pronunciation: 'bah-HAH-dah day pah-RED',
    category: 'Shots & Techniques',
    skillLevel: 'Advanced',
    definition: 'Spanish for "wall descent" or "wall exit." An advanced shot where the ball bounces in your court and goes over the side or back fence/wall, requiring you to exit the court to play it before it bounces a second time.',
    usage: 'That lob was so high, it created a bajada de pared opportunity. She ran around the court and somehow got it back!',
    difficulty: '⭐⭐⭐⭐⭐ (Very hard)',
    hasVideo: false,
    seeAlso: ['globo', 'salida-de-pared']
  },
  {
    id: 'bandeja',
    name: 'Bandeja',
    pronunciation: 'ban-DAY-ha',
    category: 'Shots & Techniques',
    skillLevel: 'Intermediate to Advanced',
    definition: 'A defensive overhead shot hit with slice and topspin that keeps the ball in play while maintaining net position. Not as powerful as a smash, but more controlled and less risky.',
    usage: 'She used a perfect bandeja to keep them pinned at the baseline while maintaining her net position.',
    difficulty: '⭐⭐⭐⭐ (Requires practice and timing)',
    hasVideo: true,
    videoId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video
    seeAlso: ['vibora', 'smash', 'net-position']
  },
  {
    id: 'baseline',
    name: 'Baseline',
    category: 'Court & Facilities',
    skillLevel: 'All levels',
    definition: 'The back boundary line of the court where the glass wall begins. Unlike tennis, padel players don\'t typically serve from the baseline—they serve from the service line.',
    usage: 'After the serve, many beginners stay glued to the baseline. More advanced players work their way forward to the net.',
    seeAlso: ['service-line', 'back-wall']
  },
  {
    id: 'carbon-fiber',
    name: 'Carbon Fiber',
    category: 'Equipment',
    skillLevel: 'Intermediate to Advanced',
    definition: 'A stiff, lightweight material used in padel racket construction. Provides more power and durability than fiberglass but less comfort and forgiveness.',
    usage: 'Carbon fiber rackets are popular with advanced players who have consistent technique and want maximum power.',
    seeAlso: ['fiberglass', 'pala', 'eva-foam']
  },
  {
    id: 'chiquita',
    name: 'Chiquita',
    pronunciation: 'chee-KEE-tah',
    category: 'Shots & Techniques',
    skillLevel: 'Intermediate to Advanced',
    definition: 'A soft, low shot hit at the net that lands at the opponents\' feet, forcing them to hit up from a difficult position. Similar to a drop shot but specifically executed from the net position.',
    usage: 'Perfect chiquita! Dropped it right at their feet—now they have to hit up, giving us the smash.',
    difficulty: '⭐⭐⭐⭐ (Requires touch and timing)',
    hasVideo: true,
    videoId: 'dQw4w9WgXcQ', // Placeholder
    seeAlso: ['net-position', 'drop-shot', 'por-tres']
  },
  {
    id: 'contrapared',
    name: 'Contrapared',
    pronunciation: 'con-trah-pah-RED',
    category: 'Shots & Techniques',
    skillLevel: 'Intermediate',
    definition: 'Spanish for "against the wall." A shot where the ball bounces off your back wall and you hit it back to opponent\'s court, often while the ball is still traveling toward you off the wall.',
    usage: 'The contrapared is an intermediate skill—learning to time your shot as the ball comes off your own back wall.',
    difficulty: '⭐⭐⭐ (Timing takes practice)',
    seeAlso: ['back-wall', 'wall-play']
  },
  {
    id: 'deuce',
    name: 'Deuce',
    pronunciation: 'DOOS (English)',
    category: 'Rules & Scoring',
    skillLevel: 'All levels',
    definition: 'The score when both teams have won 3 points in a game (40-40). Must win by 2 consecutive points to win the game.',
    usage: 'Traditional deuce requires winning two consecutive points, but some leagues use Golden Point (next point wins).',
    seeAlso: ['advantage', 'golden-point']
  },
  {
    id: 'diamond-shape',
    name: 'Diamond Shape (Diamante)',
    pronunciation: 'dee-ah-MAHN-tay',
    category: 'Equipment',
    skillLevel: 'Advanced',
    definition: 'Racket shape with the sweet spot positioned high on the racket face. Designed for power and aggressive play.',
    usage: 'Diamond shape rackets are for power players who have mastered control and want maximum smash power.',
    seeAlso: ['round-shape', 'teardrop-shape', 'sweet-spot']
  },
  {
    id: 'fiberglass',
    name: 'Fiberglass',
    category: 'Equipment',
    skillLevel: 'All levels',
    definition: 'A softer, more flexible material used in padel racket construction. Provides better control, comfort, and forgiveness on mishits compared to carbon fiber.',
    usage: 'Fiberglass rackets are recommended for beginners because they\'re more forgiving and comfortable while you develop technique.',
    seeAlso: ['carbon-fiber', 'hybrid-materials', 'round-shape']
  },
  {
    id: 'globo',
    name: 'Globo (Lob)',
    pronunciation: 'GLOW-bow',
    category: 'Shots & Techniques',
    skillLevel: 'All levels',
    definition: 'Spanish for "lob"—a high, arcing shot hit over opponents\' heads to land deep in their court. Used defensively to buy time or offensively to force weak returns.',
    usage: 'Good globo! Pushed them all the way back to the baseline.',
    difficulty: '⭐⭐ (Easy to execute, hard to perfect)',
    hasVideo: true,
    videoId: 'dQw4w9WgXcQ', // Placeholder
    seeAlso: ['passing-shot', 'bajada-de-pared']
  },
  {
    id: 'golden-point',
    name: 'Golden Point (Punto de Oro)',
    pronunciation: 'POON-toh day OH-roh',
    category: 'Rules & Scoring',
    skillLevel: 'All levels',
    definition: 'A scoring variation where, at deuce (40-40), the next point wins the game instead of requiring advantage. Receiving team chooses which side to receive the serve.',
    usage: 'We\'re at deuce. This league uses golden point, so next point wins the game.',
    seeAlso: ['deuce', 'advantage']
  },
  {
    id: 'let',
    name: 'Let',
    category: 'Rules & Scoring',
    skillLevel: 'All levels',
    definition: 'A serve that touches the net but lands in the correct service box, resulting in a replay of that serve. No limit on number of lets in padel.',
    usage: 'Let! The serve hit the net but landed in the box. Serve again.',
    seeAlso: ['serve', 'fault', 'service-box']
  },
  {
    id: 'mexicano',
    name: 'Mexicano Format',
    pronunciation: 'meh-hee-CAH-no',
    category: 'Game Formats',
    skillLevel: 'All levels',
    definition: 'Tournament or social format where you play with a different partner every game. Similar to Americano but with more focus on individual performance.',
    usage: 'Tonight\'s mixer is Mexicano format—you\'ll have a different partner each game.',
    seeAlso: ['americano-format', 'round-robin']
  },
  {
    id: 'net-position',
    name: 'Net Position',
    category: 'Strategy & Tactics',
    skillLevel: 'Intermediate to Advanced',
    definition: 'The dominant court position where both players are close to the net (1-2 meters away). The team at net usually controls the point.',
    usage: 'The key to winning in padel is establishing and maintaining net position.',
    seeAlso: ['transition', 'volley', 'baseline']
  },
  {
    id: 'padel',
    name: 'Padel (Sport)',
    pronunciation: 'PAH-del (American) or pah-DELL (Spanish)',
    category: 'General',
    skillLevel: 'All levels',
    definition: 'A racket sport combining elements of tennis and squash, played in doubles on an enclosed court approximately 25% smaller than a tennis court, with walls that are part of the game.',
    usage: 'Padel was invented in 1969 in Acapulco, Mexico. It\'s now played by 25+ million people in 110+ countries.',
    seeAlso: ['fip', 'uspa', 'premier-padel']
  },
  {
    id: 'pala',
    name: 'Pala (Racket)',
    pronunciation: 'PAH-lah',
    category: 'Equipment',
    skillLevel: 'All levels',
    definition: 'Spanish for "racket"—the solid, stringless racket used in padel with a perforated face (holes throughout). Maximum length 45.5cm.',
    usage: 'Unlike tennis rackets, palas have no strings—just a solid perforated face.',
    seeAlso: ['sweet-spot', 'carbon-fiber', 'wrist-strap']
  },
  {
    id: 'por-tres',
    name: 'Por Tres',
    pronunciation: 'por TRACE',
    category: 'Shots & Techniques',
    skillLevel: 'Advanced',
    definition: 'Spanish for "through the three"—an advanced shot hit through the opening on the side wall. Ball exits the court through side opening.',
    usage: 'Incredible por tres! The ball bounced and spun right through the side opening.',
    difficulty: '⭐⭐⭐⭐⭐ (Very rare)',
    seeAlso: ['por-cuatro', 'side-wall']
  },
  {
    id: 'round-shape',
    name: 'Round Shape (Redonda)',
    pronunciation: 'reh-DON-dah',
    category: 'Equipment',
    skillLevel: 'Beginner to Intermediate',
    definition: 'Racket shape with the sweet spot centered in the middle of the racket face. Designed for maximum control and forgiveness.',
    usage: 'Beginners should start with a round shape racket—the large sweet spot is forgiving while you develop technique.',
    seeAlso: ['teardrop-shape', 'diamond-shape', 'sweet-spot']
  },
  {
    id: 'serve',
    name: 'Serve (Saque)',
    pronunciation: 'SAH-kay (Spanish)',
    category: 'Shots & Techniques',
    skillLevel: 'All levels',
    definition: 'The shot that starts each point, hit underhand from behind the service line to the diagonal service box. Must bounce ball once and contact below waist.',
    usage: 'The serve in padel is about starting the rally, not winning the point. Consistency matters more than power.',
    difficulty: '⭐⭐ (Easy to learn, hard to perfect)',
    hasVideo: true,
    videoId: 'dQw4w9WgXcQ', // Placeholder
    seeAlso: ['service-box', 'fault', 'let']
  },
  {
    id: 'side-wall',
    name: 'Side Wall',
    category: 'Court & Facilities',
    skillLevel: 'All levels',
    definition: 'The walls running along the sides of the court, typically consisting of glass at the back portion and metal mesh at the front portion.',
    usage: 'Side walls create angles and strategic opportunities. The por tres shot exits through the side opening.',
    seeAlso: ['back-wall', 'metal-mesh', 'por-tres']
  },
  {
    id: 'smash',
    name: 'Smash (Remate)',
    pronunciation: 'reh-MAH-tay (Spanish)',
    category: 'Shots & Techniques',
    skillLevel: 'Intermediate to Advanced',
    definition: 'A powerful overhead shot aimed at winning the point outright, similar to a tennis smash but with wall considerations.',
    usage: 'Nice smash! Hit it right between them—no chance to return.',
    difficulty: '⭐⭐⭐⭐ (Hard to execute well)',
    hasVideo: true,
    videoId: 'dQw4w9WgXcQ', // Placeholder
    seeAlso: ['bandeja', 'vibora', 'net-position']
  },
  {
    id: 'sweet-spot',
    name: 'Sweet Spot',
    category: 'Equipment',
    skillLevel: 'All levels',
    definition: 'The optimal area on the racket face where contact produces the best combination of power, control, and feel.',
    usage: 'Round rackets have the largest sweet spot (center), diamond rackets have smallest (top).',
    seeAlso: ['pala', 'round-shape', 'diamond-shape']
  },
  {
    id: 'teardrop-shape',
    name: 'Teardrop Shape (Lágrima)',
    pronunciation: 'LAH-gree-mah',
    category: 'Equipment',
    skillLevel: 'Intermediate',
    definition: 'Racket shape with sweet spot positioned slightly higher than round shape but lower than diamond. Balanced design offering compromise between power and control.',
    usage: 'Teardrop shape rackets are the most versatile—good for players still finding their style.',
    seeAlso: ['round-shape', 'diamond-shape', 'sweet-spot']
  },
  {
    id: 'uspa',
    name: 'USPA (United States Padel Association)',
    pronunciation: 'U-S-P-A (letters)',
    category: 'Organizations',
    skillLevel: 'All levels',
    definition: 'The official governing body for padel in the United States. Member of FIP (International Padel Federation).',
    usage: 'Our directory includes all USPA-registered clubs plus 50+ additional clubs we\'ve independently verified.',
    seeAlso: ['fip', 'premier-padel']
  },
  {
    id: 'vibora',
    name: 'Víbora',
    pronunciation: 'VEE-bor-ah',
    category: 'Shots & Techniques',
    skillLevel: 'Advanced',
    definition: 'Spanish for "viper"—an aggressive overhead shot with sidespin that hits the side wall at an angle, making it difficult to return. More offensive than bandeja, less risky than smash.',
    usage: 'Beautiful víbora! Hit the side wall at such an angle they couldn\'t get it back.',
    difficulty: '⭐⭐⭐⭐⭐ (Requires spin control)',
    hasVideo: true,
    videoId: 'dQw4w9WgXcQ', // Placeholder
    seeAlso: ['bandeja', 'smash', 'side-wall']
  },
  {
    id: 'volley',
    name: 'Volley (Volea)',
    pronunciation: 'voh-LAY-ah (Spanish)',
    category: 'Shots & Techniques',
    skillLevel: 'All levels',
    definition: 'Hitting the ball before it bounces on the ground. The most important shot in padel—teams at net winning points through volleys.',
    usage: 'The team at net dominated with solid volleys—they didn\'t let anything get past them.',
    difficulty: '⭐⭐ (Basic volley easy, mastery hard)',
    hasVideo: true,
    videoId: 'dQw4w9WgXcQ', // Placeholder
    seeAlso: ['net-position']
  },
  {
    id: 'wall-play',
    name: 'Wall Play',
    category: 'Strategy & Tactics',
    skillLevel: 'All levels',
    definition: 'The use of glass and mesh walls as part of gameplay—the defining characteristic of padel that differentiates it from tennis and pickleball.',
    usage: 'Wall play is what makes padel special. Learning to let the ball come off the back wall is a game-changer for beginners.',
    hasVideo: true,
    videoId: 'dQw4w9WgXcQ', // Placeholder
    seeAlso: ['back-wall', 'side-wall', 'contrapared']
  },
  {
    id: 'wrist-strap',
    name: 'Wrist Strap',
    category: 'Equipment',
    skillLevel: 'All levels',
    definition: 'Safety cord that attaches the racket to your wrist, preventing it from flying out of your hand. Mandatory in tournaments and many clubs.',
    usage: 'Always use the wrist strap—nobody wants a flying racket to the face.',
    seeAlso: ['pala']
  }
];

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Terms');

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(term => {
      const matchesSearch =
        term.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (term.usage && term.usage.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All Terms' ||
        term.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const termsByLetter = useMemo(() => {
    const grouped: Record<string, Term[]> = {};
    alphabet.forEach(letter => {
      grouped[letter] = filteredTerms.filter(
        term => term.name.charAt(0).toUpperCase() === letter
      );
    });
    return grouped;
  }, [filteredTerms]);

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Padel Glossary: A-Z Guide
            </h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Your complete dictionary of 100+ padel terms. From bandeja to víbora, learn every term with pronunciations, examples, and video tutorials.
          </p>
        </div>
      </section>

      {/* Sticky Controls */}
      <div className="sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search glossary... (type any term or definition)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Alphabet Navigation */}
          <div className="flex flex-wrap gap-1 justify-center">
            {alphabet.map(letter => {
              const hasTerms = termsByLetter[letter].length > 0;
              return (
                <button
                  key={letter}
                  onClick={() => scrollToLetter(letter)}
                  disabled={!hasTerms}
                  className={`w-8 h-8 rounded font-semibold transition-colors ${
                    hasTerms
                      ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                      : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">
                {filteredTerms.length}
              </div>
              <div className="text-sm text-blue-700">Terms Found</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-sm text-blue-700">Total Terms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">10</div>
              <div className="text-sm text-blue-700">Video Tutorials</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">6</div>
              <div className="text-sm text-blue-700">Categories</div>
            </div>
          </div>
        </div>

        {/* Terms by Letter */}
        {alphabet.map(letter => {
          const terms = termsByLetter[letter];
          if (terms.length === 0) return null;

          return (
            <div key={letter} id={`letter-${letter}`} className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 inline-block pb-2">
                {letter}
              </h2>

              <div className="space-y-6">
                {terms.map(term => (
                  <div
                    key={term.id}
                    id={term.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {term.name}
                        </h3>
                        {term.pronunciation && (
                          <p className="text-sm text-gray-600 italic">
                            Pronunciation: {term.pronunciation}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                          {term.category}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                          {term.skillLevel}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-3 leading-relaxed">
                      <strong>Definition:</strong> {term.definition}
                    </p>

                    {term.usage && (
                      <p className="text-gray-600 mb-3 italic">
                        <strong>Usage:</strong> "{term.usage}"
                      </p>
                    )}

                    {term.difficulty && (
                      <p className="text-gray-700 mb-3">
                        <strong>Difficulty:</strong> {term.difficulty}
                      </p>
                    )}

                    {term.hasVideo && (
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-3">
                        <div className="aspect-video bg-gray-200 rounded flex items-center justify-center mb-2">
                          <div className="text-gray-500 text-center">
                            <BookOpen className="w-12 h-12 mx-auto mb-2" />
                            <p className="text-sm">Video Tutorial Available</p>
                            <p className="text-xs">Watch professional demonstration</p>
                          </div>
                        </div>
                        {/* Actual YouTube embed would go here with term.videoId */}
                      </div>
                    )}

                    {term.seeAlso && term.seeAlso.length > 0 && (
                      <div className="border-t border-gray-200 pt-3">
                        <p className="text-sm text-gray-600">
                          <strong>See also:</strong>{' '}
                          {term.seeAlso.map((relatedId, index) => (
                            <span key={relatedId}>
                              <a
                                href={`#${relatedId}`}
                                className="text-blue-600 hover:text-blue-800 hover:underline"
                              >
                                {glossaryTerms.find(t => t.id === relatedId)?.name || relatedId}
                              </a>
                              {index < term.seeAlso!.length - 1 && ', '}
                            </span>
                          ))}
                        </p>
                      </div>
                    )}

                    {/* Share Link */}
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `${window.location.origin}/get-started/glossary#${term.id}`
                          );
                          alert('Link copied to clipboard!');
                        }}
                        className="text-sm text-gray-500 hover:text-gray-700 underline"
                      >
                        📋 Copy link to this term
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* No Results */}
        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No terms found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Use These Terms on Court?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find padel courts near you and start playing today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Find Courts Near You
            </Link>
            <Link
              href="/get-started"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              Back to Beginner's Hub
            </Link>
          </div>
        </div>

        {/* Related Resources */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Link
            href="/how-to-play"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              How to Play Padel
            </h3>
            <p className="text-gray-600 text-sm">
              Complete rules and gameplay guide
            </p>
          </Link>
          <Link
            href="/rules"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Rules & Regulations
            </h3>
            <p className="text-gray-600 text-sm">
              Official FIP rules detailed
            </p>
          </Link>
          <Link
            href="/equipment"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Equipment Guide
            </h3>
            <p className="text-gray-600 text-sm">
              Buying guide for all gear
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
