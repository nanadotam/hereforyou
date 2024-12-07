import { motion } from 'framer-motion';

const ShapeDecoration = ({ color, variant }) => {
  const shapes = {
    1: "M0,0 L30,0 L15,30 Z",
    2: "M0,15 Q15,30 30,15 Q15,0 0,15",
    3: "M0,0 Q30,0 30,30 Q0,30 0,0",
  };

  return (
    <motion.svg
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2 }}
      width="30"
      height="30"
      className="absolute"
      style={{ fill: color }}
    >
      <path d={shapes[variant]} />
    </motion.svg>
  );
};

const colorDescriptions = {
  'var(--pale-blue)': `We chose this serene blue because it mirrors the depth of intimate partnership. Like gentle waves washing over shore, it creates a peaceful space where you and your partner can explore vulnerable topics without fear. This shade has been shown to lower anxiety and promote open dialogue - perfect for those deeper conversations about dreams, fears, and hopes you share together.`,
  
  'var(--pistachio)': `This vibrant green was carefully selected to celebrate friendship's natural growth. Like a flourishing garden, it creates an environment where conversations can branch out naturally. The fresh, energetic tone encourages storytelling and laughter, while its natural essence helps ground discussions in authenticity - making it easier to share both life's victories and challenges with friends.`,
  
  'var(--coral-red)': `This warm coral shade was handpicked to honor family bonds. It carries the warmth of a shared meal and the comfort of coming home. We chose it because it balances energy with comfort, creating a space where family stories can unfold naturally, memories can be shared, and new traditions can take root. It's especially powerful for bridging generational conversations.`,
  
  'var(--purple)': `This thoughtful purple was selected for your journey of self-discovery. It combines the stability of blue with the energy of red, creating a perfect sanctuary for inner work. Like twilight inviting reflection, this shade helps quiet external noise and turn attention inward, making it easier to explore your thoughts, dreams, and personal growth with clarity.`,
  
  'var(--warm-mauve)': `This soulful mauve was chosen specifically for spiritual reflection. It carries the gentleness needed for contemplative moments while maintaining the depth required for meaningful spiritual exploration. Like early morning light in a quiet sanctuary, it creates a space where faith, doubt, and divine connection can be explored with both reverence and authenticity.`,
  
  'var(--deep-rose)': `This tender rose hue was selected for its unique ability to hold space for vulnerability. Like the first light of dawn, it offers hope and new beginnings. We chose it because it creates a nurturing atmosphere where hearts can open gradually and safely, perfect for those moments when you're sharing your deepest feelings or working through emotional challenges.`
};

const InfoCard = ({ category, onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative max-w-2xl w-full mx-auto bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl"
      style={{ borderLeft: `4px solid ${category.backgroundColor}` }}
    >
      {/* Decorative shapes */}
      <div className="absolute -top-4 -right-4">
        <ShapeDecoration color={category.backgroundColor} variant={1} />
      </div>
      <div className="absolute top-1/2 -left-6">
        <ShapeDecoration color={category.backgroundColor} variant={2} />
      </div>
      <div className="absolute -bottom-6 right-12">
        <ShapeDecoration color={category.backgroundColor} variant={3} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <h2 className="font-playfair italic text-3xl text-gray-800 text-center">
          {category.title}
        </h2>
        
        <p className="text-gray-600 text-center font-playfair">
          {category.description}
        </p>

        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 italic text-center">
            {colorDescriptions[category.backgroundColor]}
          </p>
        </div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="px-8 py-3 rounded-full font-playfair italic text-white transition-colors"
            style={{ backgroundColor: category.backgroundColor }}
          >
            Begin Journey
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InfoCard; 