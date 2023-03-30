package com.ezenbooks.backend;


import org.apache.http.HttpResponse;

import com.ezenbooks.backend.pay.request.UserToken;
import com.ezenbooks.backend.service.CancelService;
import com.ezenbooks.backend.service.EasyService;
import com.ezenbooks.backend.service.SubmitService;
import com.ezenbooks.backend.service.VerificationService;

public class Bootpay extends BootpayObject {
    public Bootpay() { }

    public Bootpay(String rest_application_id, String private_key) {
        super(rest_application_id, private_key);
    }

    public Bootpay(String rest_application_id, String private_key, String devMode) {
        super(rest_application_id, private_key, devMode);
    }


    //easy
    public HttpResponse getUserToken(UserToken userToken) throws Exception {
        return EasyService.getUserToken(this, userToken);
    }

 

    //submit
    public HttpResponse submit(String receiptId) throws Exception {
        return SubmitService.submit(this, receiptId);
    }

    //veriy
    public HttpResponse verify(String receiptId) throws Exception {
        return VerificationService.verify(this, receiptId);
    }
    public HttpResponse certificate(String receiptId) throws Exception {
        return VerificationService.certificate(this, receiptId);
    }
}
