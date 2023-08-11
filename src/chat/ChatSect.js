import React from 'react'

export default function ChatSect() {
  return (
    <>

      <div className="sidebar">

        <div className="container sidebar__container">

          <div className="sidebar-top">

            <h2 className="sidebar__title">Quadro Chat</h2>

            <div className="sidebar__btn-box">
              <button className="btn sidebar__btn">Chat <i className="fas fa-message"></i></button>
              <button className="btn sidebar__btn">Login <i className="fas fa-address-card"></i></button>
            </div>

          </div>

          <div className="sidebar-bot">
            <div className="sidebar__card">
              <div className="sidebar__card__profile">Siz</div>
              <button className="sidebar__card__icon"><i className="fas fa-ellipsis"></i></button>
            </div>
          </div>

        </div>

      </div>

    </>
  );
};