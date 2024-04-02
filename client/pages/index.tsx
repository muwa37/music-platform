import MainLayout from '../layouts/MainLayout';

const Index = () => {
  return (
    <MainLayout>
      <div className='center'>
        <h1>welcome</h1>
        <h3>some sample tracks could be here...</h3>
      </div>

      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </MainLayout>
  );
};

export default Index;
