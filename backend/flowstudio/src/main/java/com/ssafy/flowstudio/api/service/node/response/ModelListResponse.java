package com.ssafy.flowstudio.api.service.node.response;

import com.ssafy.flowstudio.domain.node.entity.ModelName;
import com.ssafy.flowstudio.domain.node.entity.ModelProvider;
import lombok.Builder;
import lombok.Getter;
import org.springframework.web.bind.annotation.GetMapping;

@Getter
public class ModelListResponse {

    private final String provider;
    private final String name;
    private final int maxTokens;

    @Builder
    private ModelListResponse(String provider, String name, int maxTokens) {
        this.provider = provider;
        this.name = name;
        this.maxTokens = maxTokens;
    }

    public static ModelListResponse from(ModelName modelName) {
        return ModelListResponse.builder()
                .provider(modelName.getProvider().name())
                .name(modelName.getName())
                .maxTokens(modelName.getMaxTokens())
                .build();
    }

}