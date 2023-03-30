import Button from 'react-bootstrap/Button';
import React from 'react';
import '../css/Modal.css';

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <Button className="close" onClick={close}>
              &times;
            </Button>
          </header>
          <main>{props.children}</main>
          <footer>
            <Button className="close" onClick={close}>
              창닫기
            </Button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;