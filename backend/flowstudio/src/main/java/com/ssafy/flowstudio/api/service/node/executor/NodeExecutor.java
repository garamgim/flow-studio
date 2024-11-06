package com.ssafy.flowstudio.api.service.node.executor;

import com.ssafy.flowstudio.domain.chat.entity.Chat;
import com.ssafy.flowstudio.api.service.node.RedisService;
import com.ssafy.flowstudio.domain.node.entity.Node;
import com.ssafy.flowstudio.domain.node.entity.NodeType;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public abstract class NodeExecutor {

    protected final RedisService redisService;
    protected final ApplicationEventPublisher eventPublisher;

    public abstract void execute(Node node, Chat chat);
    public abstract NodeType getNodeType();
}
