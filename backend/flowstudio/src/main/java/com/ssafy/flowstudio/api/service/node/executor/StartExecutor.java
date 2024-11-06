package com.ssafy.flowstudio.api.service.node.executor;

import com.ssafy.flowstudio.api.service.node.RedisService;
import com.ssafy.flowstudio.api.service.node.event.NodeEvent;
import com.ssafy.flowstudio.domain.chat.entity.Chat;
import com.ssafy.flowstudio.domain.node.entity.Node;
import com.ssafy.flowstudio.domain.node.entity.NodeType;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

@Component
public class StartExecutor extends NodeExecutor {

    public StartExecutor(RedisService redisService, ApplicationEventPublisher eventPublisher) {
        super(redisService, eventPublisher);
    }

    @Override
    public void execute(Node node, Chat chat) {
        Node targetNode = node.getOutputEdges().get(0).getTargetNode();
        publishEvent(NodeEvent.of(targetNode, chat));
    }

    @Override
    public NodeType getNodeType() {
        return NodeType.START;
    }

}
