import User from 'types/interface/user.interface';
import ResponseDto from '../response.dto';

export default interface GetSignInUserReponseDto extends ResponseDto, User {
    
}