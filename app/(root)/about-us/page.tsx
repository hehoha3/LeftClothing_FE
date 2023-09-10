import Image from "next/image";
import banner from "../../../public/about-banner.jpg";
import img from "../../../public/img-admin.jpg";
import UnderAbout from "@/components/elements/UnderAbout";

const AboutPage = () => {
  return (
    <>
      <section className="w-full pt-10 mb-20">
        <div className="px-4 mx-auto max-w-[1770px]">
          <Image src={banner} alt="about us banner" />
        </div>
      </section>

      <section className="px-4 mb-20">
        <div className="flex items-start justify-start">
          <div className="min-w-[69%] mt-[60px]">
            <h1 className="text-[40px] font-semibold pb-[25px] mb-[25px] border-b-2 w-fit border-gray-300">
              About Lef.T
            </h1>

            <p className="text-[16px] font-normal mb-10">
              Lef.T Clothing cam kết mang đến cho khách hàng những trải nghiệm
              mua sắm tốt nhất. Chúng tôi có đội ngũ nhân viên tư vấn nhiệt
              tình, sẵn sàng hỗ trợ khách hàng lựa chọn được những sản phẩm phù
              hợp nhất. Ngoài ra, chúng tôi cũng có chính sách bảo hành và đổi
              trả sản phẩm rõ ràng, minh bạch.
            </p>

            <p className="text-[16px] font-semibold text-black mb-4">
              Store Hours
            </p>

            <p className="text-[16px] text-description font-normal leading-[1.7px] mb-7">
              Monday-Saturday : 11am–7pm ET
            </p>
            <p className="text-[16px] text-description font-normal leading-[1.7px]">
              Sunday : 11am–6pm ET
            </p>
          </div>
          <div className="min-w-[31%]">
            <Image src={img} alt="img" />
          </div>
        </div>
      </section>

      <section className="px-4 mb-20">
        <div className="px-4 py-10 bg-smoot-pink">
          <div className="flex flex-col items-start">
            <div className="flex-1 flex flex-row justify-start items-center py-[55px] border-b-2">
              <h2 className="w-[40%] px-4 text-[30px]">Giao Hàng Nhanh</h2>
              <p className="w-[60%] px-4 max-w-[550px] text-description">
                Bạn sẽ không phải chờ đợi? Dịch vụ chuyển phát nhanh đảm bảo bạn
                nhận được các mặt hàng trong vòng 5 ngày.
              </p>
            </div>
            <div className="flex-1 flex flex-row justify-start items-center py-[55px]">
              <h2 className="w-[40%] px-4 text-[30px]">Phong Cách Mới</h2>
              <p className="w-[60%] px-4 max-w-[550px] text-description">
                Liên tục thiết kế các Collection mới. Hãy quay lại sớm để khám
                phá những gì mới và chọn lấy sự yêu thích của bạn
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <UnderAbout />
      </section>
    </>
  );
};

export default AboutPage;
