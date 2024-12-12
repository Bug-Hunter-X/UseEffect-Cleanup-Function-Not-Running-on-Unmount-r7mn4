```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    console.log('Mounted!');
    return () => {
      console.log('Unmounted!');
    };
  }, []);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      {showComponent && (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      )}
      <button onClick={toggleComponent}>
        {showComponent ? 'Unmount' : 'Mount'}
      </button>
    </div>
  );
}
```