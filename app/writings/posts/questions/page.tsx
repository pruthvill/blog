import Post from "@/app/components/Post";

const QuestionsPost = () => {
  const postData = {
    title: "Questions I like to think about.",
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Am I fooling myself? If yes, how?</li>
        <li>What am I not accepting?</li>
        <li>Do I really want what I want?</li>
        <li>If you were to find a box filled with everything you have ever lost in your life, what would you look for?</li>
        <li>What experiences can you have only at this age?</li>
        <li>If you were to enter a room filled with every person you have ever known, who would be the first person you would look for? Why?</li>
        <li>What would you do if you knew you couldn't fail?</li>
        <li>What characteristics do you wish you had? How can you get those characteristics?</li>
        <li>What are you afraid of? Why?</li>
        <li>What advice would you give to someone in your situation?</li>
        <li>What important truth do very few people agree with you on?</li>
        <li>If you have a 10-year plan to get somewhere, why can't you do it in 6 months?</li>
        <li>What does your dream day look like?</li>
        <li>If someone could only see my actions and not hear my words, what would they say are my priorities?</li>
        <li>What situations do I want to be in?</li>
        <li>How is your physical reality affecting your mind?</li>
        <li>What could make today great?</li>
        <li>What should I let go of today?</li>
        <li>How am I wasting my time?</li>
        <li>What is life trying to teach you right now?</li>
        <li>Are you happy with the way you treat yourself?</li>
      </ul>
    ),
  };
  
  return <Post {...postData} />;
};

export default QuestionsPost;
