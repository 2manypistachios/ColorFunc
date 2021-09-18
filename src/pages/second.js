import PageContainer from 'src/components/layouts/PageContainer';
import Actions from 'src/components/modules/Actions';

const Second = () => (
  <PageContainer title="You Are In Second Page">
    <Actions switchName="First Page" />
  </PageContainer>
);

export default Second;
