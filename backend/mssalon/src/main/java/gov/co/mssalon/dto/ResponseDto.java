package gov.co.mssalon.dto;

import org.springframework.http.HttpStatus;

import gov.co.mssalon.model.Productos;
import lombok.Data;

/**
 * Clase POJO
 *
 * @author: LR.
 * @version: 25/03/2023
 */
@Data
public class ResponseDto {

    private HttpStatus responseCode;
    private String message;
    private Productos data;
    private String transactionId;

    public HttpStatus getResponseCode() {
		return responseCode;
	}

	public void setResponseCode(HttpStatus responseCode) {
		this.responseCode = responseCode;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	

	public String getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}
	

	public Productos getData() {
		return data;
	}

	public void setData(Productos data) {
		this.data = data;
	}

	public ResponseDto() {

    }

    public ResponseDto(HttpStatus responseCode, String message, Productos data, String transactionId) {
        super();
        this.responseCode = responseCode;
        this.message = message;
        this.data = data;
        this.transactionId = transactionId;
    }

}
