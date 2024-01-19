import React, { useEffect, useRef, useState } from 'react'
import './style.css';
import { userBoardStore } from 'stores';

//    component: 게시물 작성 화면 컴포넌트   //
export default function BoardWrite() {

  //    state: 본문 영역 요소 상태    //
  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  //    state: 파일 입력 요소 상태    //
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  //    state: 게시물 상태    //
  const { title, setTitle } = userBoardStore();
  const { content, setContent } = userBoardStore();
  const { boardImageFileList, setBoardImageFileList } = userBoardStore();
  const { resetBoard } = userBoardStore();

  //    state: 게시물 이미지 미리보기 URL 상태    //
  const[ imageUrls, setImageUrls] = useState<String[]>([]);

  //    effect: 마운트 시 실행할 함수   //
  useEffect(() => {
    resetBoard();
  }, []);

  //    render: 게시물 작성 화면 컴포넌트   //
  return (
    <div id='board-write-wrapper'>
      <div className='board-write-container'>
        <div className='board-write-box'>
          <div className='board-write-title-box'>
            <input className='board-write-title-input' type='text' placeholder='제목을 작성해 주세요.' value={title}></input>
          </div>
          <div className='divider'></div>
          <div className='board-write-content-box'>
            <textarea ref={ contentRef } className='board-write-content-textarea' placeholder='본문을 작성해주세요.' value={content} />
            <div className='icon-button'>
              <div className='icon image-box-light-icon'></div>
            </div>
            <input ref={imageInputRef} type='file' accept='image/*' style={ { display: 'none' }}/>
          </div>
          <div className='board-write-images-box'>
            <div className='board-write-image-box'>
              <img className='board-write-image' src='http://www.nanasalon.com/shopimages/nanasalon/0240020007132.jpg?1705624768' />
              <div className='icon-button image-close'>
                <div className='icon close-icon'></div>
              </div>
            </div>

            <div className='board-write-image-box'>
              <img className='board-write-image' src='http://www.nanasalon.com/shopimages/nanasalon/0240020007132.jpg?1705624768' />
              <div className='icon-button image-close'>
                <div className='icon close-icon'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
