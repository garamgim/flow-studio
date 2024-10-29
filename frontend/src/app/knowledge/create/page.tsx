'use client';

import React from 'react';
import CreateStep from '@/components/knowledge/CreateStep';
import CreateFirst from '@/components/knowledge/CreateFirst';
import CreateSecond from '@/components/knowledge/CreateSecond';
import { useRecoilState } from 'recoil';
import { currentStepState } from '@/store/atoms'; 
import { useRouter } from 'next/navigation'; 
import ColorButton from '@/components/common/ColorButton';
import { IoCheckmarkCircle } from '@react-icons/all-files/io5/IoCheckmarkCircle';

const Page = () => {
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState); // Recoil 상태 사용
  const router = useRouter(); // useRouter 사용
  const goToListPage = (): void => {
    router.push('/knowledges'); 
    setCurrentStep(1)
  };

  return (
    <>
      <div className="flex relative">
        <div className="w-60" style={{ height: 'calc(100vh - 57px)' }}>
          <CreateStep />
        </div>

        <div className="flex-grow">
          {currentStep === 1 ? <CreateFirst /> : <CreateSecond />}
        </div>

        {currentStep === 3 && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-20"></div>
            
            <div className="fixed inset-0 z-30 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-[309px] h-[234px] flex flex-col items-center justify-center">
                <IoCheckmarkCircle className="text-[#9A75BF] w-12 h-12 mb-4"/>
                <p className="text-lg mb-6 text-center">지식이 생성되었습니다.</p>
                <ColorButton w="117px" h="30px" text="문서로 이동" onHandelButton={goToListPage}/>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Page;
