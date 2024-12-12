# React useEffect Cleanup Function Issue

This repository demonstrates a common issue with React's `useEffect` hook where the cleanup function doesn't seem to execute when the component is unmounted.  The example shows a simple counter component; however, the expected console logs indicating mount and unmount are not consistently printed.

## Problem
The `useEffect` hook with an empty dependency array should only run once on mount and execute the cleanup function once before unmount.  In certain circumstances, particularly with rapid component re-renders or parent component unmounting, the cleanup function might not run. This can lead to memory leaks or unexpected behavior.

## Solution
The solution focuses on ensuring the component is properly unmounted and that there are no other interfering factors preventing the cleanup function's execution. In this case, the solution is straightforward.  The problem is often much more subtle and may involve the context of parent components or complex state management.