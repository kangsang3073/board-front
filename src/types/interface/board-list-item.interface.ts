export default interface BoardListItem {
    boardNumber : number;
    title : String;
    content : string;
    boardTitleImage : string | null;
    favoriteCount : number;
    commentCount : number;
    viewCount : number;
    writeDatetime : String;
    writerNickname: string;
    writerProfileImage: String | null;
}