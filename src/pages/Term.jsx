import React from 'react'
import { Link } from 'react-router'
import TiviIcon from '../assets/images/tivi-icon.png'
import PhotoIcon from '../assets/images/photo-icon.png'
import LockIcon from '../assets/images/lock-icon.png'

export default function Term() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="relative bg-white mt-20 rounded-lg w-[90%] mx-auto text-[16px] framed-popup-wrapper">
          {/* Content */}
          <div className="relative z-10 framed-popup rounded-2xl text-left">
            <h2
              className="text-[#e85454] text-2xl text-center my-6"
              style={{ fontFamily: 'Uniqlo Bold' }}
            >
              ĐIỀU KHOẢN SỬ DỤNG
            </h2>
            <p className="mb-4" style={{ fontFamily: 'Uniqlo Bold' }}>
              Khi tham gia chụp ảnh tại sự kiện, bạn đồng ý với các điều khoản
              sau:
            </p>

            <div className="flex items-center gap-4 mb-4">
              <img src={TiviIcon} alt="Hình ảnh" width={50} />
              <p style={{ fontFamily: 'Uniqlo Light' }}>
                Hình ảnh có thể được chiếu trên màn hình LED trong suốt sự kiện.
              </p>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <img src={PhotoIcon} alt="Hình ảnh" width={50} />
              <p style={{ fontFamily: 'Uniqlo Light' }}>
                Hình ảnh chỉ được sử dụng cho mục đích truyền thông sự kiện,
                không phục vụ mục đích thương mại.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img src={LockIcon} alt="Bảo mật" width={50} />
              <p style={{ fontFamily: 'Uniqlo Light' }}>
                Chúng tôi cam kết bảo mật thông tin cá nhân và không chia sẻ với
                bên thứ ba.
              </p>
            </div>
          </div>
        </div>

        <Link to="/">
          <button
            className="bg-[#e85454] text-white text-lg uppercase py-1 px-10 mt-12 shadow-2xl"
            type="submit"
            style={{ fontFamily: 'Uniqlo Bold' }}
          >
            Đóng
          </button>
        </Link>
      </div>

      <div div className="horizontal-line"></div>
    </div>
  )
}
