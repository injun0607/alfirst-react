import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';



function Loading(props:{loadingState : boolean}): ReactElement | null{

    if(!props.loadingState){
        return null;
    }else{
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            >
                <div className="bg-gray-800 p-6 rounded-xl text-center shadow-2xl border-2 border-yellow-500">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-300">🗡️ 보상을 계산 중입니다...</h2>
                    <p className="text-gray-300">잠시만 기다려주세요, 사냥꾼님의 퀘스트 결과를 준비하고 있습니다.</p>
                    <motion.div
                        className="mt-4 w-16 h-16 border-4 border-yellow-400 border-dashed rounded-full animate-spin mx-auto"
                    ></motion.div>
                </div>
            </motion.div>
        )    
    }
}

export default Loading;