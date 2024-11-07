import React, { useEffect, useState } from "react";
import { fetchUserDetail } from "../apiLayer";
import { toast } from "react-toastify";
import { useParams } from "react-router";

const useUserDetail = () => {
  const { id } = useParams();
  console.log(id, "params");
  const [userDetail, setUserDetail] = useState([]);
  useEffect(() => {
    fetchUserDetail(id)
      .then((data) => {
        setUserDetail(data);
      })
      .catch((err) => toast(err.response.data));
  }, []);
  return [userDetail];
};

export default useUserDetail;
