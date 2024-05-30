import React, { useEffect, useState } from "react";
import "./SubsData.scss";
import axios from "axios";

const SubsData: React.FC = () => {
  const [subscription, setSubscription] = useState<any>({});
  const [showData, setShowData] = useState(false);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "https://admin-stage.youtunein.com/api/v1/enterprise-client-manager-subscription/info?organizationId=1",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    setSubscription(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBox1Click = () => {
    setShowData(true);
  };
  return (
    <div>
      <div className="container">
        <div className="row row-cols-4">
          <div className="col">
            <div className="box-1">
              {showData && <h1> Data:{subscription?.seatsUsed}</h1>}
              <button className="btn-test" onClick={handleBox1Click}>
                Display Data
              </button>
            </div>
          </div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
  );
};

export default SubsData;
