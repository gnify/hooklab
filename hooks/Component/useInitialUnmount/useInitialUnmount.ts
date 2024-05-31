import { useEffect } from 'react'

/**
 * @name useInitialUnmount
 * @description A custom React hook that allows you to run a callback function when a component unmounts.
 *
 * @param callback - The callback function to be executed when the component unmounts.
 * @returns {void}
 */
export const useInitialUnmount = (callback: () => void) => {
  useEffect(() => callback, [])
}
