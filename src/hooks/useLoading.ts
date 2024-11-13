// 경로가 변경될 때마다 로딩 상태 업데이트 
'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoadingStore } from '@/stores/loadingStore';

export const useLoading = () => {
  const { isLoading, setIsLoading } = useLoadingStore();
  const pathname = usePathname();

  useEffect(() => {
    // 경로 변경 시작 시 로딩 상태를 true로 설정
    setIsLoading(true);

    // 페이지 로드 완료 시 로딩 상태를 false로 설정
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 나중에 수정 필요함 

    return () => clearTimeout(timeout);
  }, [pathname, setIsLoading]);

  return isLoading;
};