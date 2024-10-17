package com.ssafy.flowstudio.domain.auth.response.impl;


import com.ssafy.flowstudio.domain.auth.response.OAuth2Response;
import com.ssafy.flowstudio.domain.user.ProviderType;

import java.util.Map;

public class KakaoResponse implements OAuth2Response {
	private final Map<String, Object> attribute;
	private final Map<String, Object> properties;
	private final Map<String, Object> kakaoAccount;

	public KakaoResponse(Map<String, Object> attributes) {
		this.attribute = attributes;
		this.properties = (Map<String, Object>)attributes.get("properties");
		this.kakaoAccount = (Map<String, Object>)attributes.get("kakao_account");
	}

	@Override
	public ProviderType getProvider() {
		return ProviderType.KAKAO;
	}

	@Override
	public String getProviderId() {
		return attribute.get("id").toString();
	}

	@Override
	public String getEmail() {
		return kakaoAccount.get("email").toString();
	}

}
