import { useEffect } from 'react';

function useClickOutside(ref, handler) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(null);
      }
    }

    document.addEventListener('onclick', handleClickOutside);
    return () => {
      document.removeEventListener('onclick', handleClickOutside);
    };
  }, [ref, handler]);
}

export default useClickOutside;


