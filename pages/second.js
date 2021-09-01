import PageContainer from '@/layouts/PageContainer';
import Actions from '@/components/modules/Actions';

const Second = () => (
  <PageContainer title="You Are In Second Page">
    <Actions switchName="First Page" />
  </PageContainer>
);

export default Second;
