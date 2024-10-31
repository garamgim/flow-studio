package com.ssafy.flowstudio.api.service.node.response;

import com.ssafy.flowstudio.api.service.chatflow.response.CoordinateResponse;
import com.ssafy.flowstudio.api.service.chatflow.response.EdgeResponse;
import com.ssafy.flowstudio.domain.node.entity.NodeType;
import com.ssafy.flowstudio.domain.node.entity.Start;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
public class StartResponse extends NodeResponse {

    private final int maxLength;

    @Builder
    private StartResponse(Long nodeId, String name, NodeType type, CoordinateResponse coordinate, List<EdgeResponse> sourceEdges, List<EdgeResponse> targetEdges, int maxLength) {
        super(nodeId, name, type, coordinate, sourceEdges, targetEdges);
        this.maxLength = maxLength;
    }

    public static StartResponse from(Start start) {
        return StartResponse.builder()
                .nodeId(start.getId())
                .name(start.getName())
                .type(start.getType())
                .coordinate(CoordinateResponse.from(start.getCoordinate()))
                .sourceEdges(start.getSourceEdges().stream().map(EdgeResponse::from).toList())
                .targetEdges(start.getTargetEdges().stream().map(EdgeResponse::from).toList())
                .maxLength(start.getMaxLength())
                .build();
    }

}
