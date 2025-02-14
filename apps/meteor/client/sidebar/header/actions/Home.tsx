import { Sidebar } from '@rocket.chat/fuselage';
import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import { useRouter, useLayout, useSetting } from '@rocket.chat/ui-contexts';
import type { HTMLAttributes, VFC } from 'react';
import React from 'react';

const SidebarHeaderActionHome: VFC<Omit<HTMLAttributes<HTMLElement>, 'is'>> = (props) => {
	const router = useRouter();
	const { sidebar } = useLayout();
	const showHome = useSetting('Layout_Show_Home_Button');
	const handleHome = useMutableCallback(() => {
		sidebar.toggle();
		router.navigate('/home');
	});

	return showHome ? (
		<Sidebar.TopBar.Action {...props} icon='home' onClick={handleHome} pressed={router.getLocationPathname().includes('/home')} />
	) : null;
};

export default SidebarHeaderActionHome;
