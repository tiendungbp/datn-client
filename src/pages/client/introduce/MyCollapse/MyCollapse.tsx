import React, { useState } from "react";
import "./MyCollapse.scss";
import CheckImage from "../../../../assets/icons/check.png";
import StatisticImage from "../../../../assets/icons/statistics.png";
import HeartImage from "../../../../assets/icons/heart.png";
import UserVectorImage from "../../../../assets/icons/userVector.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronDown,
  faChevronUp,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";

const MyCollapse = () => {
  const [selected, setSelected] = useState(1);

  const toggleDiv = (id: number) => {
    if (selected === id) {
      return;
    }
    setSelected(id);
  };
  //
  return (
    <div className="mycollapse__client wrapper flex flex-col gap-8">
      <div
        className="toggle-container box-shadow p-5"
        onClick={() => toggleDiv(1)}
      >
        <div className="flex justify-between">
          <div className="toggle-title flex gap-4">
            <img src={CheckImage} alt="" />
            <p className="text-xl font-medium textColor">
              Chuyên nghiệp và Kinh nghiệm
            </p>
          </div>
          <div className="toggle-button">
            {selected === 1 ? (
              <FontAwesomeIcon
                className="text-[1.4rem] text-[#1386ed]"
                icon={faChevronUp}
              />
            ) : (
              <FontAwesomeIcon className="text-[1.4rem]" icon={faChevronDown} />
            )}
          </div>
        </div>
        <div className={`toggle-content ${selected === 1 ? "open" : ""}`}>
          <div className="content mt-2">
            <p className="leading-8">
              Với đội ngũ nha sĩ giàu kinh nghiệm và được đào tạo chuyên sâu,
              chúng tôi cam kết cung cấp những dịch vụ nha khoa chất lượng và
              tối ưu nhất. Chúng tôi luôn cập nhật những công nghệ và phương
              pháp mới nhất để đảm bảo bạn luôn được phục vụ tốt nhất.
            </p>
          </div>
        </div>
      </div>
      <div
        className="toggle-container box-shadow p-5"
        onClick={() => toggleDiv(2)}
      >
        <div className="flex justify-between">
          <div className="toggle-title flex gap-4">
            <img src={StatisticImage} alt="" />
            <p className="text-xl font-medium textColor ">
              Tiện nghi và hiện đại
            </p>
          </div>
          <div className="toggle-button">
            {selected === 2 ? (
              <FontAwesomeIcon
                className="text-[1.4rem] text-[#1386ed]"
                icon={faChevronUp}
              />
            ) : (
              <FontAwesomeIcon className="text-[1.4rem]" icon={faChevronDown} />
            )}
          </div>
        </div>
        <div className={`toggle-content ${selected === 2 ? "open" : ""}`}>
          <div className="content mt-2">
            <p className="leading-8 sm:text-[1rem] text-sm">
              Với đội ngũ nha sĩ giàu kinh nghiệm và được đào tạo chuyên sâu,
              chúng tôi cam kết cung cấp những dịch vụ nha khoa chất lượng và
              tối ưu nhất. Chúng tôi luôn cập nhật những công nghệ và phương
              pháp mới nhất để đảm bảo bạn luôn được phục vụ tốt nhất.
            </p>
          </div>
        </div>
      </div>
      <div
        className="toggle-container box-shadow p-5"
        onClick={() => toggleDiv(3)}
      >
        <div className="flex justify-between">
          <div className="toggle-title flex gap-4">
            <img src={HeartImage} alt="" />
            <p className="text-xl font-medium textColor ">
              Chuyên nghiệp và Kinh nghiệm
            </p>
          </div>
          <div className="toggle-button">
            {selected === 3 ? (
              <FontAwesomeIcon
                className="text-[1.4rem] text-[#1386ed]"
                icon={faChevronUp}
              />
            ) : (
              <FontAwesomeIcon className="text-[1.4rem]" icon={faChevronDown} />
            )}
          </div>
        </div>
        <div className={`toggle-content ${selected === 3 ? "open" : ""}`}>
          <div className="content mt-2">
            <p className="leading-8">
              Với đội ngũ nha sĩ giàu kinh nghiệm và được đào tạo chuyên sâu,
              chúng tôi cam kết cung cấp những dịch vụ nha khoa chất lượng và
              tối ưu nhất. Chúng tôi luôn cập nhật những công nghệ và phương
              pháp mới nhất để đảm bảo bạn luôn được phục vụ tốt nhất.
            </p>
          </div>
        </div>
      </div>
      <div
        className="toggle-container box-shadow p-5"
        onClick={() => toggleDiv(4)}
      >
        <div className="flex justify-between">
          <div className="toggle-title flex gap-4">
            <img src={UserVectorImage} alt="" />
            <p className="text-xl font-medium textColor ">
              Chuyên nghiệp và Kinh nghiệm
            </p>
          </div>
          <div className="toggle-button">
            {selected === 4 ? (
              <FontAwesomeIcon
                className="text-[1.4rem] text-[#1386ed]"
                icon={faChevronUp}
              />
            ) : (
              <FontAwesomeIcon className="text-[1.4rem]" icon={faChevronDown} />
            )}
          </div>
        </div>
        <div className={`toggle-content ${selected === 4 ? "open" : ""}`}>
          <div className="content mt-2">
            <p className="leading-8">
              Với đội ngũ nha sĩ giàu kinh nghiệm và được đào tạo chuyên sâu,
              chúng tôi cam kết cung cấp những dịch vụ nha khoa chất lượng và
              tối ưu nhất. Chúng tôi luôn cập nhật những công nghệ và phương
              pháp mới nhất để đảm bảo bạn luôn được phục vụ tốt nhất.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCollapse;
