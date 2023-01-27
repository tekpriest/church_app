import { Action } from '../constants/interface';
import {
  StyledTouchableOpacity,
  StyledView,
  StyledText,
} from '../constants/styles';

const ActionCard = (props: { action: Action }) => {
  const { action: item } = props;
  return (
    <StyledTouchableOpacity className='z-20 mx-2 my-2 h-36 w-[45%] rounded-2xl justify-center items-center shadow-md shadow-gray-400 bg-white'>
      <StyledView className='rounded-full  bg-white h-11 w-11 z-10 mb-2 shadow-md shadow-gray-300'></StyledView>
      <StyledText>{item.title}</StyledText>
    </StyledTouchableOpacity>
  );
};

export default ActionCard;
