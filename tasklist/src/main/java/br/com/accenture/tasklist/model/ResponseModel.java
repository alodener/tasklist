package br.com.accenture.tasklist.model;

public class ResponseModel {
	
	private int id;
	private String msg;
	
	public ResponseModel() {}
	
	public ResponseModel(int id, String msg) {
		this.id = id;
		this.msg = msg;
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	
}
