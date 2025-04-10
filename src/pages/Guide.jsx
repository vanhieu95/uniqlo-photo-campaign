import React from 'react'
import { Link } from 'react-router'

export default function Guide() {
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
              CÁCH SỬ DỤNG
            </h2>

            <p className="mb-4" style={{ fontFamily: 'Uniqlo Light' }}>
              <span style={{ fontFamily: 'Uniqlo Bold' }}>Bước 1:</span> Nhấn
              vào biểu tượng máy ảnh trên màn hình để chụp hoặc chọn hình từ thư
              viện hình của bạn
            </p>
            <p className="mb-4" style={{ fontFamily: 'Uniqlo Light' }}>
              <span style={{ fontFamily: 'Uniqlo Bold' }}>Bước 2:</span> Hình
              được chụp/chọn sẽ được hiển thị trên màn hình
            </p>
            <p className="mb-4" style={{ fontFamily: 'Uniqlo Light' }}>
              <span style={{ fontFamily: 'Uniqlo Bold' }}>Bước 3:</span> Nhấn
              ”Tiếp Tục” trên màn hình
            </p>
            <p className="mb-4" style={{ fontFamily: 'Uniqlo Light' }}>
              <span style={{ fontFamily: 'Uniqlo Bold' }}>Bước 4:</span> Viết
              cảm nhận của bạn & nhấn ”Hoàn Tất”
              <span style={{ fontFamily: 'Uniqlo Light' }}>
                {' '}
                ( số ký tự nhập: tối đa 20 chữ )
              </span>
            </p>
            <p style={{ fontFamily: 'Uniqlo Light' }}>
              <span style={{ fontFamily: 'Uniqlo Bold' }}>Bước 5:</span> Hình
              ảnh và chia sẻ của bạn sẽ được chiếu lên màn hình ngay sau khi
              hoàn tất
            </p>
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
