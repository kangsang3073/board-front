import { useEffect, useState } from 'react'
import './style.css';
import FavoriteItem from 'components/favoriteitem';
import { FavoriteListItem } from 'types/interface';
import { favoriteListMock } from 'mocks';

//    component: 게시물 상세 화면 컴포넌트   //
export default function BoardDetail() {

//    component: 게시물 상세 상단 컴포넌트   //
  const BoardDetailTop = () => {

  //    render: 게시물 상세 상단 컴포넌트 랜더링    //
    return(
    <div id='board-detail-top'>
      <div className='board-detail-top-header'>
        <div className='board-detail-title'>{'오늘점심뭐먹지'}</div>
        <div className='board-detail-top-sub-box'>
          <div className='board-detail-write-info-box'>
            <div className='board-detail-writer-profile-image'></div>
            <div className='board-detail-writer-nickname'>{'캉캉'}</div>
            <div className='board-detail-info-divider'>{'\|'}</div>
            <div className='board-detail-write-date'>{'2024. 05. 12'}</div>
          </div>
          <div className='icon-button'>
            <div className='icon more-icon'></div>
          </div>
          <div className='board-detail-more-box'>
            <div className='board-detail-update-button'>{'수정'}</div>
            <div className='divider'></div>
            <div className='board-detail-delete-button'>{'삭제'}</div>
          </div>
        </div>
      </div>
      <div className='divider'></div>
      <div className='board-detail-top-main'>
        <div className='board-detail-main-text'>{'기사공부해야하지'}</div>
        <div className='board-detail-main-image'></div>
      </div>
    </div>
    )
  }

//    component: 게시물 상세 하단 컴포넌트   //
  const BoardDetailBottom = () => {

    const [favoriteList, setFavoriteList] = useState<FavoriteListItem[]>([]);

    useEffect(() => {
      setFavoriteList(favoriteListMock);
    }, []);

  //    render: 게시물 상세 하단 컴포넌트 랜더링    //
    return(
    <div id='board-detail-bottom'>
      <div className='board-detail-bottom-button-box'>
        <div className='board-detail-bottom-button-group'>
          <div className='icon-button'>
            <div className='icon favorite-fill-icon'></div>
          </div>
          <div className='board-detail-bottom-button-text'>{`좋아요 ${12}`}</div>
          <div className='icon-button'>
            <div className='icon up-light-icon'></div>
          </div>
        </div>
        <div className='board-detail-bottom-button-group'>
          <div className='icon-button'>
            <div className='icon comment-icon'></div>
          </div>
          <div className='board-detail-bottom-button-text'>{`댓글 ${12}`}</div>
          <div className='icon-button'>
            <div className='icon up-light-icon'></div>
          </div>
        </div>
      </div>
      <div className='board-detail-bottom-favorite-box'>
        <div className='board-detail-bottom-favorite-container'>
          <div className='board-detail-bottom-favorite-title'>{'좋아요'}<span className='empasis'>{12}</span></div>
            <div className='board-detail-bottom-favorite-contents'>
              {favoriteList.map(item => <FavoriteItem favoriteListItem={item} />)}
            </div>
          </div>
        </div>
        <div className='board-detail-bottom-comment-box'></div>
      </div>
    );
  };

  //    render: 게시물 상세 화면 컴포넌트 랜더링    //
  return (
    <div id='board-detail-wrapper'>
      <div className='board-detail-container'>
        <BoardDetailTop />
        <BoardDetailBottom />
      </div>
    </div>
  )
}
