import Post from "@/app/components/Post";

const BottomUpPost = () => {
  const postData = {
    title: "Builiding life bottom up.",
    content: (
      <>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;what do you want to do right now ask 
          yourself this question everyday rather than seeing a goal in the far
          future and chasing it like wanting to become a pilot
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Memes, conversely, are disseminated through culture. Memes can
          change drastically even within a single generation. As we mature, we
          realize that we have the choice to accept or discard memes. As we accumulate
          more life experience, we acquire additional sources of memes that
          influence us directly or indirectly. Although we can choose which
          memes to embrace or reject, most individuals subconsciously adopt the
          memes passed down from society, thereby perpetuating its functioning.
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you observe your day-to-day actions, you'll likely find that most, 
          if not all, stem from the memes propagated by society. As Jung says,
          "The world will ask who you are, and if you do not know, the world will tell you." 
          When you lack intrinsic desires, society's desires often become yours.
          The danger lies in adopting these external desires without question. 
          If you fail to fulfill them, society may criticize you, and worse, you may berate yourself for neglecting your true aspirations. This cycle perpetuates a life driven by external validation rather than authentic self-realization.
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mimetic desire refers to the notion that individuals do not
          autonomously desire objects, goals, or ambitions; instead, we learn
          what to desire by observing the desires of others. We desire things
          because we see others desiring them, not due to the inherent value of
          the objects themselves.
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The idea of something is often better than the actual thing itself,
          and when you obtain it, the joy of acquisition will be much less than
          expected and will fade quickly. Our wants reside in the future, yet
          when we wish for them, we fail to comprehend the consequences of
          attaining them. It's easy to forget that we are not the same as we were 5 years
          ago; in fact, we are not even the same as a year ago. So how can you
          yearn for something in the future and assume that our future self will
          have the same desires?
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;People think they will work hard in their 20s, accumulate wealth,
          retire in their 30s, then pursue their passions, relocate to a calm
          place, and simply relax for the remainder of their lives. However,
          when the time comes, even if they have amassed enough money, they may
          realize they no longer want to do that, perhaps because their desires
          have evolved, or they have acquired new responsibilities, or their values and priorities have shifted.
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Therefore, do what you want to do now because you may not want to do
          it later. And remember, it's ok to have desires that others
          may not comprehend.
        </p>
      </>
    ),
  };

  return <Post {...postData} />;
};

export default BottomUpPost;
