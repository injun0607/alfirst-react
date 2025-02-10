import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Todo () {

  const [quests, setQuests] = useState([]);
  const [input, setInput] = useState('');
  const [reward, setReward] = useState(null);

  const handleAddQuest = () => {
    if (input.trim() !== '') {
      setQuests([...quests, { text: input, completed: false }]);
      setInput('');
    }
  };

  const handleCompleteQuest = (index) => {
    const newQuests = [...quests];
    newQuests[index].completed = true;
    setQuests(newQuests);
    
    // 보상 계산 로직 (간단한 랜덤 스탯)
    setReward({
      xp: Math.floor(Math.random() * 100),
      gold: Math.floor(Math.random() * 50),
    });
  };


    return(
      <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">🏹 현상금 사냥꾼의 퀘스트 보드</h1>

      <div className="w-full max-w-md mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 rounded-md text-black"
          placeholder="새 퀘스트를 입력하세요..."
        />
        <button
          onClick={handleAddQuest}
          className="w-full mt-2 bg-green-600 hover:bg-green-700 transition p-2 rounded-md"
        >
          🗡️ 퀘스트 수락
        </button>
      </div>

      <div className="w-full max-w-md space-y-3">
        {quests.map((quest, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg border ${quest.completed ? 'border-yellow-400 bg-yellow-800' : 'border-gray-500 bg-gray-700'}`}
          >
            <p className="text-lg">{quest.text}</p>
            {!quest.completed && (
              <button
                onClick={() => handleCompleteQuest(index)}
                className="mt-2 bg-blue-500 hover:bg-blue-600 p-2 rounded-md"
              >
                ✅ 완료하기
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {reward && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-5 right-5 bg-purple-800 p-4 rounded-xl shadow-xl"
        >
          <h2 className="text-2xl font-bold">🎁 퀘스트 보상!</h2>
          <p>✨ 경험치: {reward.xp} XP</p>
          <p>💰 골드: {reward.gold} G</p>
          <button
            onClick={() => setReward(null)}
            className="mt-2 bg-red-500 hover:bg-red-600 p-2 rounded-md"
          >
            닫기
          </button>
        </motion.div>
      )}
    </div>
    )
}


export default Todo;