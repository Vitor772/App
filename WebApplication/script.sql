USE [ListContact]
GO
/****** Object:  Table [dbo].[Contacts]    Script Date: 10/10/2022 10:01:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contacts](
	[ContactId] [int] IDENTITY(1,1) NOT NULL,
	[Contact] [varchar](250) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ListContact]    Script Date: 10/10/2022 10:01:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ListContact](
	[ListId] [int] IDENTITY(1,1) NOT NULL,
	[ContactName] [varchar](290) NULL,
	[DateOfJoining] [datetime] NULL,
	[Contact] [varchar](290) NULL
) ON [PRIMARY]
GO
