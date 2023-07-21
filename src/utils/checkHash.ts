import { ethers } from "ethers";
import { showToast } from "vant";
import {setToken,getToken} from "../assets/js/common";
import router from "../router";

export default {
  checkHash: async function (txHash:any) {
    showToast('loading...')
    let checkHash = false;
    const provider = new ethers.providers.JsonRpcProvider(
      "https://bsc.nodereal.io"
    );
    for (var i = 0; i < 15; i++) {
      await provider
        .getTransactionReceipt(txHash)
        .then((receipt) => {
          if (receipt && receipt.status === 1) {
            console.log("交易成功！", receipt);
            checkHash = true;
          } else {
            console.log("交易失败或仍在等待确认。");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      if (checkHash) {
        break;
      }
    }
    return checkHash;
  },
  Toasterror: function (error:any) {
    // Toast(error)
    var err = [
      {
        type: "execution reverted: User already exists",
        value: "execution reverted: User already exists",
      },
      {
        type: "execution reverted: User doesn't exist",
        value: "execution reverted: User doesn't exist",
      },

      {
        type: "续投不在时间范围内",
        value: "execution reverted: Related order not matured",
      },
      {
        type: "一期只能质押一次",
        value: "one period only can pledge one time",
      },
      {
        type: "交易取消",
        value: "user rejected transaction",
      },
      {
        type: "合约暂未激活",
        value: "Contract not active",
      },
      {
        type: "质押金额不在许可范围内",
        value: "Pledge amount is not within the allowed range",
      },
      {
        type: "非投喂时间",
        value: "execution reverted: Invalid feed time",
      },
      {
        type: "该订单未到提现时间",
        value: "execution reverted: Order not matured",
      },
      {
        type: "质押金额超出本期可质押金额",
        value: "Pledge amount exceeds current period limit",
      },
      {
        type: "兑换时间不能小于1小时",
        value: "Must wait at least 1 hour between orders",
      },

      {
        type: "合约已结束",
        value: "execution reverted: Contract functions have expired.",
      },

      {
        type: "非合约支持代币",
        value: "not support this token",
      },
      {
        type: "请稍后尝试10002",
        value: "call revert exception",
      },
      {
        type: "该订单未到30天,错误编号10003",
        value: "Order is not 30 days old yet.",
      },
      {
        type: "该订单未到30天,错误编号10004",
        value: "Order must be at least 30 days old",
      },
      {
        type: "还账金额未授权",
        value: "transfer amount exceeds allowance",
      },
      {
        type: "账户错误",
        value: "caller is not token owner or approved",
      },
      {
        type: "错误的代币",
        value: "invalid token ID",
      },
      {
        type: "操作时间必须大于1天",
        value: "Must wait at least 1 day between withdrawals.",
      },
      {
        type: "授权金额出错",
        value: "insufficient allowance",
      },
      {
        type: "revert pledge amount is not equale BNB send",
        value: "revert pledge amount is not equale BNB send",
      },
      {
        type: "今日已投满",
        value: "execution reverted: Exceeds daily limit",
      },
      {
        type: "余额不足",
        value: "execution reverted",
      },
    ];
    // console.log("错误信息", error);

    for (let i = 0; i < err.length; i++) {
      if (error.includes(err[i].value)) {
        // Toast(err[i].type);
        break;
      } else {
        // Toast("交易失败");
      }
    }

  },
  checkWalletType: async function () {
    let Flag = false;
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    try {
      if (accounts[0] !== getToken("OldAddress")) {
        const address = accounts[0];
        const message = "Welcome to BlueWhale";
        const tt = await window.ethereum
          .request({ method: "personal_sign", params: [message, address] })
          .then(
            async (signature:any) => {
              const isAddress = await check(message, address, signature);
              // console.log('isAddress',isAddress);
              if (isAddress) {
                console.log("成功");
                Flag = true;
                console.log("LAst", Flag);
                return Flag;
              } else {
                console.log("签名失败");
                router.push("/login?id=0");
                Flag = false;
              }
              // 这里将签名串 signature 和地址通过接口发送到后台服务验证
            },
            (err:any) => {
              router.push("/login?id=0");
              Flag = false;
              console.log(err);
              
            }
          )
          .catch((err:any) => {
            console.log("签名失败",err);
            router.push("/login?id=0");
            Flag = false;
            // 异常
          });

        return tt;
      } else {
        return 0;
      }
    } catch (error) {
      console.log("签名失败");
      console.error("检查钱包类型时发生错误:", error);
    }
  },
};

async function check(message:any, signerAddress:any, signature:any) {
  const recoveredAddress = ethers.utils.verifyMessage(message, signature);
  if (recoveredAddress.toLowerCase() === signerAddress.toLowerCase()) {
    setToken("OldAddress", signerAddress.toLowerCase());
    setToken("user_address", signerAddress.toLowerCase());
    return recoveredAddress.toLowerCase() === signerAddress.toLowerCase();
  }
}
